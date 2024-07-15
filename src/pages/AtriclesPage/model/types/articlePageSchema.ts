import { EntityState } from '@reduxjs/toolkit';

import { SortOrder } from '@/shared/types/sort';
import {
  Article,
  ArticleView,
  ArticleSortFiled,
  ArticleType,
} from 'src/entities/Article';

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
