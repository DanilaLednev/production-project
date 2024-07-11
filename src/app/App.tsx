import { Suspense, useEffect } from 'react';

import './styles/index.scss';

import { useDispatch, useSelector } from 'react-redux';
import { useTheme } from '@/app/providers/ThemeProvider';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';
import { getUserInited, userActions } from '@/entities/User';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppRouter } from './providers/router';

export const App = () => {
  const { theme } = useTheme();
  const dispatch = useDispatch();

  const inited = useSelector(getUserInited);

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="">
        <Navbar />

        <div className="content-page">
          <Sidebar />
          { inited && <AppRouter /> }
        </div>
      </Suspense>
    </div>
  );
};
