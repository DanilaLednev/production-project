import { ArticleDetailsSchema } from '@/entities/Aritcle';
import { fetchArticleById } from '@/entities/Aritcle/model/sevices/fetchArticleById/fetchArticleById';
import { articleDetailsReducer } from '@/entities/Aritcle/model/slice/articleDetailsSlice';

const data = {
  id: '1',
  title: 'Title',
  subtitle: 'Subtitle',
  img: '',
  views: 333,
  createdAt: '18.06.2024',
  // type: ArticleType[],
  // blocks: ArticleBlock[];
};

describe('articleDetailsSlice', () => {
  test('test  pending', () => {
    const state: DeepPartial<ArticleDetailsSchema> = {
      isLoading: false,
    };

    expect(articleDetailsReducer(
      state as ArticleDetailsSchema,
      fetchArticleById.pending,
    )).toEqual({
      isLoading: true,
    });
  });
});
