import { RouteProps } from 'react-router-dom';
import React from 'react';
import { AboutPage } from 'pages/aboutPage';
import { MainPage } from 'pages/mainPage';
import { NotFoundPage } from 'pages/notFoundPage';
import { ProfilePage } from 'pages/ProfilePage';
import { ArticlesPage } from 'pages/AtriclesPage';
import { ArticleDetailsPage } from 'pages/ArticleDetailsPage';
import { ArticleEditPage } from 'pages/ArticleEditPage';

export type AppRouteProps = RouteProps & {
  authOnly?: boolean
}

export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  PROFILE = 'profile',
  ARTICLES = 'articles',
  ARTICLES_DETAILS = 'article_details',
  ARTICLES_CREATE = 'article_create',
  ARTICLES_EDIT = 'article_edit',
  // LASt
  NOT_FOUND = 'not-found'
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.PROFILE]: '/profile/', // +id
  [AppRoutes.ARTICLES]: '/articles',
  [AppRoutes.ARTICLES_DETAILS]: '/articles/', // + id
  [AppRoutes.ARTICLES_CREATE]: '/articles/create',
  [AppRoutes.ARTICLES_EDIT]: '/articles/:id/edit',
  // LAST!!!
  [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, AppRouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath[AppRoutes.MAIN],
    element: <MainPage />,
  },
  [AppRoutes.ABOUT]: {
    path: RoutePath[AppRoutes.ABOUT],
    element: <AboutPage />,
  },
  [AppRoutes.PROFILE]: {
    path: `${RoutePath[AppRoutes.PROFILE]}:id`,
    element: <ProfilePage />,
    authOnly: true,
  },
  [AppRoutes.ARTICLES]: {
    path: RoutePath[AppRoutes.ARTICLES],
    element: <ArticlesPage />,
    authOnly: true,
  },
  [AppRoutes.ARTICLES_DETAILS]: {
    path: `${RoutePath[AppRoutes.ARTICLES_DETAILS]}:id`,
    element: <ArticleDetailsPage />,
    authOnly: true,
  },
  [AppRoutes.ARTICLES_CREATE]: {
    path: `${RoutePath[AppRoutes.ARTICLES_CREATE]}`,
    element: <ArticleEditPage />,
    authOnly: true,
  },
  [AppRoutes.ARTICLES_EDIT]: {
    path: `${RoutePath[AppRoutes.ARTICLES_EDIT]}`,
    element: <ArticleEditPage />,
    authOnly: true,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath[AppRoutes.NOT_FOUND],
    element: <NotFoundPage />,
  },
};
