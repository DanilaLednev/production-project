import React from 'react';

import { UserRole } from '@/entities/User/model/consts/userConsts';
import { AdminPanelPage } from '@/pages/AdminPanelPage';
import { ArticleDetailsPage } from '@/pages/ArticleDetailsPage';
import { ArticleEditPage } from '@/pages/ArticleEditPage';
import { ArticlesPage } from '@/pages/AtriclesPage';
import { ForbiddenPage } from '@/pages/ForbiddenPage';
import { ProfilePage } from '@/pages/ProfilePage';
import { AboutPage } from '@/pages/aboutPage';
import { MainPage } from '@/pages/mainPage';
import { NotFoundPage } from '@/pages/notFoundPage';
import {
  AppRoutes,
  getRouteArticleCreate,
  getRouteArticleDetails,
  getRouteArticleEdit,
  getRouteArticles,
  getRouteAbout,
  getRouteAdmin,
  getRouteForbidden,
  getRouteMain,
  getRouteProfile,
} from '@/shared/const/router';
import { AppRouteProps } from '@/shared/types/router';

export const routeConfig: Record<AppRoutes, AppRouteProps> = {
  [AppRoutes.MAIN]: {
    path: getRouteMain(),
    element: <MainPage />,
  },
  [AppRoutes.ABOUT]: {
    path: getRouteAbout(),
    element: <AboutPage />,
  },
  [AppRoutes.PROFILE]: {
    path: getRouteProfile(':id'),
    element: <ProfilePage />,
    authOnly: true,
  },
  [AppRoutes.ARTICLES]: {
    path: getRouteArticles(),
    element: <ArticlesPage />,
    authOnly: true,
  },
  [AppRoutes.ARTICLES_DETAILS]: {
    path: getRouteArticleDetails(':id'),
    element: <ArticleDetailsPage />,
    authOnly: true,
  },
  [AppRoutes.ARTICLES_CREATE]: {
    path: getRouteArticleCreate(),
    element: <ArticleEditPage />,
    authOnly: true,
  },
  [AppRoutes.ARTICLES_EDIT]: {
    path: getRouteArticleEdit(':id'),
    element: <ArticleEditPage />,
    authOnly: true,
  },
  [AppRoutes.ADMIN_PANEL]: {
    path: getRouteAdmin(),
    element: <AdminPanelPage />,
    authOnly: true,
    roles: [UserRole.MANAGER, UserRole.ADMIN],
  },
  [AppRoutes.FORBIDDEN]: {
    path: getRouteForbidden(),
    element: <ForbiddenPage />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: '*',
    element: <NotFoundPage />,
  },
};
