import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getArticlePageInited } from '../../selectors/articlesPageSelectors';
import { articlePageActions } from '../../slices/ArticlePageSlice';
import { fetchArticleList } from '../fetchArticlesList/fetchArticlesList';

export const initArticlePage = createAsyncThunk<
  void,
  void,
  ThunkConfig<string>
>(
  'articlePage/initArticlePage',
  async (_, thunkApi) => {
    const { getState, dispatch } = thunkApi;
    const inited = getArticlePageInited(getState());

    if (!inited) {
      dispatch(articlePageActions.initState());
      dispatch(fetchArticleList({
        page: 1,
      }));
    }
  },
);
