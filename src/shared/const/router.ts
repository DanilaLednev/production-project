export enum AppRoutes {
  MAIN = 'main',
  SETTINGS = 'settings',
  ABOUT = 'about',
  PROFILE = 'profile',
  ARTICLES = 'articles',
  ARTICLES_DETAILS = 'article_details',
  ARTICLES_CREATE = 'article_create',
  ARTICLES_EDIT = 'article_edit',
  ADMIN_PANEL = 'admin_panel',
  FORBIDDEN = 'forbidden',
  // LASt
  NOT_FOUND = 'not-found',
}

export const getRouteMain = () => '/';
export const getRouteAbout = () => '/about';
export const getRouteProfile = (id: string) => `/profile/${id}`;
export const getRouteArticles = () => '/articles';
export const getRouteArticleDetails = (id: string) => `/articles/${id}`;
export const getRouteArticleCreate = () => '/articles/create';
export const getRouteArticleEdit = (id: string) => `/articles/${id}/edit`;
export const getRouteAdmin = () => '/admin';
export const getRouteForbidden = () => '/forbidden';
export const getRouteSettings = () => '/settings';

export const AppRouteByPathPattern: Record<string, AppRoutes> = {
  [getRouteMain()]: AppRoutes.MAIN,
  [getRouteAbout()]: AppRoutes.ABOUT,
  [getRouteProfile(':id')]: AppRoutes.PROFILE,
  [getRouteArticles()]: AppRoutes.ARTICLES,
  [getRouteArticleDetails(':id')]: AppRoutes.ARTICLES_DETAILS,
  [getRouteArticleCreate()]: AppRoutes.ARTICLES_CREATE,
  [getRouteArticleEdit(':id')]: AppRoutes.ARTICLES_EDIT,
  [getRouteAdmin()]: AppRoutes.ADMIN_PANEL,
  [getRouteForbidden()]: AppRoutes.FORBIDDEN,
  [getRouteSettings()]: AppRoutes.SETTINGS,
};

// export const RoutePath: Record<AppRoutes, string> = {
//   [AppRoutes.MAIN]: getRouteMain(),
//   [AppRoutes.ABOUT]: getRouteAbout(),
//   [AppRoutes.PROFILE]: getRouteProfile(':id'),
//   [AppRoutes.ARTICLES]: getRoutArticles(),
//   [AppRoutes.ARTICLES_DETAILS]: getRoutArticleDetails(':id'),
//   [AppRoutes.ARTICLES_CREATE]: getRoutArticleCreate(),
//   [AppRoutes.ARTICLES_EDIT]: getRoutArticleEdit(':id'),
//   [AppRoutes.ADMIN_PANEL]: getRouteAdmin(),
//   [AppRoutes.FORBIDDEN]: getRouteForbidden(),
//   // LAST!!!
//   [AppRoutes.NOT_FOUND]: '*',
// };
