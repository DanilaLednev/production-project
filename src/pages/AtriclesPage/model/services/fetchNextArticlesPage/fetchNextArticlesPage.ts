import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import {
  getArticlesPageHasMore,
  getArticlesPageIsLoading,
  getArticlesPageLimit,
  getArticlesPageNum,
} from '../../selectors/articlesPageSelectors';
import { articlePageActions } from '../../slices/ArticlePageSlice';
import {
  fetchArticleList,
} from '../fetchArticlesList/fetchArticlesList';

export interface FetchArticlesListProps {
  page?: number;
}

export const fetchNextArticlesPage = createAsyncThunk<
  void,
  void,
  ThunkConfig<string>
>(
  'articlePage/fetchNextArticlesPage',
  async (_, thunkApi) => {
    const { getState, dispatch } = thunkApi;
    const hasMore = getArticlesPageHasMore(getState());
    const page = getArticlesPageNum(getState());
    const isLoading = getArticlesPageIsLoading(getState());

    if (hasMore && !isLoading) {
      dispatch(articlePageActions.setPage(page + 1));
      dispatch(fetchArticleList({}));
    }
  },
);
