// eslint-disable-next-line import/order
import { Suspense, useEffect } from 'react';

import './styles/index.scss';

import { useSelector } from 'react-redux';

import { useAppToolbar } from './lib/useAppToolbar';
import { AppRouter } from './providers/router';

import { getUserInited, initAuthData } from '@/entities/User';
import { AppLoaderLayout } from '@/shared/layouts/AppLoaderLayout';
import { MainLayout } from '@/shared/layouts/MainLayout';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { Navbar } from '@/widgets/Navbar';
import { PageLoader } from '@/widgets/PageLoader';
import { ScrollToolbar } from '@/widgets/ScrollToolbar';
import { Sidebar } from '@/widgets/Sidebar';

export const App = () => {
  const { theme } = useTheme();
  const dispatch = useAppDispatch();
  const inited = useSelector(getUserInited);
  const toolbar = useAppToolbar();

  useEffect(() => {
    if (!inited) {
      dispatch(initAuthData());
    }
  }, [dispatch, inited]);

  if (!inited) {
    return (
      <ToggleFeatures
        feature="isAppRedesigned"
        on={
          <div id="app" className={classNames('app_redesigned', {}, [theme])}>
            <AppLoaderLayout />{' '}
          </div>
        }
        off={<PageLoader />}
      />
    );
  }

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      off={
        <div id="app" className={classNames('app', {}, [theme])}>
          <Suspense fallback="">
            <Navbar />

            <div className="content-page">
              <Sidebar />
              <AppRouter />
            </div>
          </Suspense>
        </div>
      }
      on={
        <div id="app" className={classNames('app_redesigned', {}, [theme])}>
          <Suspense fallback="">
            <MainLayout
              sidebar={<Sidebar />}
              header={<Navbar />}
              content={<AppRouter />}
              toolbar={toolbar}
            />
          </Suspense>
        </div>
      }
    />
  );
};
