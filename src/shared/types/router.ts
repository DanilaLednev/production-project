import { RouteProps } from 'react-router-dom';
import { UserRole } from '@/entities/User/model/consts/userConsts';

export type AppRouteProps = RouteProps & {
  authOnly?: boolean;
  roles?: UserRole[];
}
