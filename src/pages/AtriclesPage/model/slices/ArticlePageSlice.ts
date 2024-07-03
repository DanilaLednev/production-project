import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import {
  Article,
  ArticleType,
  ArticleView,
  ArticleSortFiled,
} from 'entities/Aritcle';
import { ARTICLE_VIEW_LOCALSTORAGE_KEY } from 'shared/const/localstorage';
import { SortOrder } from 'shared/types';
import { fetchArticleList } from '../services/fetchArticlesList/fetchArticlesList';
import { ArticlePageSchema } from '../types/articlePageSchema';

const articlesAdapter = createEntityAdapter<Article>({
  selectId: (article) => article.id,
});

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
  (state) => state.articlesPage || articlesAdapter.getInitialState(),
);

export const articlePageSlice = createSlice({
  name: 'articlePageSlice',
  initialState: articlesAdapter.getInitialState<ArticlePageSchema>({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {},
    view: ArticleView.SMALL,
    page: 1,
    hasMore: true,
    _inited: false,
    limit: 9,
    sort: ArticleSortFiled.TITLE,
    search: '',
    order: 'asc',
    type: ArticleType.ALL,
  }),
  reducers: {
    setView: (state, action: PayloadAction<ArticleView>) => {
      state.view = action.payload;
      localStorage.setItem(ARTICLE_VIEW_LOCALSTORAGE_KEY, action.payload);
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setOrder: (state, action: PayloadAction<SortOrder>) => {
      state.order = action.payload;
    },
    setSort: (state, action: PayloadAction<ArticleSortFiled>) => {
      state.sort = action.payload;
    },
    setType: (state, action: PayloadAction<ArticleType>) => {
      state.type = action.payload;
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    initState: (state) => {
      const view = localStorage.getItem(ARTICLE_VIEW_LOCALSTORAGE_KEY) as ArticleView;
      state.view = view;
      state.limit = view === ArticleView.BIG ? 3 : 9;
      state._inited = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticleList.pending, (state, action) => {
        state.error = undefined;
        state.isLoading = true;

        if (action.meta.arg.replace) {
          articlesAdapter.removeAll(state);
        }
      })
      .addCase(fetchArticleList.fulfilled, (
        state,
        action,
      ) => {
        state.isLoading = false;
        state.hasMore = action.payload.length >= state.limit!; // ?

        if (action.meta.arg.replace) {
          articlesAdapter.setAll(state, action.payload);
        } else {
          articlesAdapter.addMany(state, action.payload);
        }
      })
      .addCase(fetchArticleList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },

});

export const { actions: articlePageActions } = articlePageSlice;
export const { reducer: articlePageReducer } = articlePageSlice;