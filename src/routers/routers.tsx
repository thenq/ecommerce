import { createBrowserRouter, type RouteObject } from 'react-router-dom';
import { lazy } from 'react';

const HomePage = lazy(() => import('@/components/HomePage'));

export const privateRoutes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
  },
];

export const publicRoutes = [
  // {
  //   path: '/',
  //   element: <PrivateLayout />,
  //   children: [
  //     {
  //       path: 'dashboard',
  //       element: <DashboardPage />,
  //     },
  //     {
  //       path: 'profile',
  //       element: <ProfilePage />,
  //     },
  //   ],
  // },
];

export const createAppRouter = (isAuthenticated: boolean) =>
  createBrowserRouter(isAuthenticated ? privateRoutes : publicRoutes);
