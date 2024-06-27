import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { SortOrder } from 'shared/types';
import { ArticleSortFiled, ArticleType } from 'entities/Aritcle';
import { getArticlePageInited } from '../../selectors/articlesPageSelectors';
import { articlePageActions } from '../../slices/ArticlePageSlice';
import { fetchArticleList } from '../fetchArticlesList/fetchArticlesList';

export const initArticlePage = createAsyncThunk<
  void,
  URLSearchParams,
  ThunkConfig<string>
>(
  'articlePage/initArticlePage',
  async (searchParams, thunkApi) => {
    const { getState, dispatch } = thunkApi;
    const inited = getArticlePageInited(getState());

    if (!inited) {
      const orderFormUrl = searchParams.get('order') as SortOrder;
      const sortFormUrl = searchParams.get('sort') as ArticleSortFiled;
      const searchFormUrl = searchParams.get('search');
      const typeFormUrl = searchParams.get('type') as ArticleType;

      if (orderFormUrl) {
        dispatch(articlePageActions.setOrder(orderFormUrl));
      }
      if (sortFormUrl) {
        dispatch(articlePageActions.setSort(sortFormUrl));
      }
      if (searchFormUrl) {
        dispatch(articlePageActions.setSearch(searchFormUrl));
      }
      if (typeFormUrl) {
        dispatch(articlePageActions.setType(typeFormUrl));
      }

      dispatch(articlePageActions.initState());
      dispatch(fetchArticleList({}));
    }
  },
);
