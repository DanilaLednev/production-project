import { createSelector } from '@reduxjs/toolkit';

import { SidebarItemType } from '../types/sidebar';

import { getUserAuthData } from '@/entities/User';
import AboutIconDeprecated from '@/shared/assets/icons/about.svg';
import ArticleIconDeprecated from '@/shared/assets/icons/article.svg';
import MainIconDeprecated from '@/shared/assets/icons/main.svg';
import ProfileIconDeprecated from '@/shared/assets/icons/profile.svg';
import AboutIcon from '@/shared/assets/iconsRedesign/about.svg';
import ArticleIcon from '@/shared/assets/iconsRedesign/article.svg';
import MainIcon from '@/shared/assets/iconsRedesign/home.svg';
import ProfileIcon from '@/shared/assets/iconsRedesign/user.svg';
import {
  getRouteArticles,
  getRouteAbout,
  getRouteMain,
  getRouteProfile,
} from '@/shared/const/router';
import { toggleFeatures } from '@/shared/lib/features';

// export const getSidebarItems = createSelector(getUserAuthData, (userData) => {
//   const sidebarItemList: SidebarItemType[] = [
//     {
//       path: getRouteMain(),
//       Icon: MainIconDeprecated,
//       text: 'Главная',
//     },
//     {
//       path: getRouteAbout(),
//       Icon: AboutIconDeprecated,
//       text: 'О сайте',
//     },
//   ];
//   if (userData) {
//     sidebarItemList.push(
//       {
//         path: getRouteProfile(userData.id),
//         Icon: ProfileIconDeprecated,
//         text: 'Профиль',
//         authOnly: true,
//       },
//       {
//         path: getRoutArticles(),
//         Icon: ArticleIconDeprecated,
//         text: 'Статьи',
//         authOnly: true,
//       },
//     );
//   }
//   return sidebarItemList;
// });

export const getSidebarItems = createSelector(getUserAuthData, (userData) => {
  const sidebarItemsList: SidebarItemType[] = [
    {
      path: getRouteMain(),
      Icon: toggleFeatures({
        name: 'isAppRedesigned',
        off: () => MainIconDeprecated,
        on: () => MainIcon,
      }),
      text: 'Главная',
    },
    {
      path: getRouteAbout(),
      Icon: toggleFeatures({
        name: 'isAppRedesigned',
        off: () => AboutIconDeprecated,
        on: () => AboutIcon,
      }),
      text: 'О сайте',
    },
  ];

  if (userData) {
    sidebarItemsList.push(
      {
        path: getRouteProfile(userData.id),
        Icon: toggleFeatures({
          name: 'isAppRedesigned',
          off: () => ProfileIconDeprecated,
          on: () => ProfileIcon,
        }),
        text: 'Профиль',
        authOnly: true,
      },
      {
        path: getRouteArticles(),
        Icon: toggleFeatures({
          name: 'isAppRedesigned',
          off: () => ArticleIconDeprecated,
          on: () => ArticleIcon,
        }),
        text: 'Статьи',
        authOnly: true,
      },
    );
  }

  return sidebarItemsList;
});
