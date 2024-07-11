import { EntityState } from '@reduxjs/toolkit';
import {
  Article,
  ArticleView,
  ArticleSortFiled,
  ArticleType,
} from '@/entities/Aritcle';
import { SortOrder } from '@/shared/types';

export interface ArticlePageSchema extends EntityState<Article>{
  isLoading?: boolean;
  error?: string;

  // pagination
  page: number;
  limit?: number;
  hasMore: boolean;

  // filters
  view: ArticleView;
  order: SortOrder;
  sort: ArticleSortFiled;
  search: string;
  type: ArticleType;

  _inited: boolean;
}
