import { Suspense, lazy } from 'react';
import MainLayout from './layout/MainLayout';
import { Navigate, RouteObject } from 'react-router-dom';
import LoadingScreen from './LoadingScreen';

const Loadable = (Component: any) => (props: JSX.IntrinsicAttributes) =>
  (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );

const Home = Loadable(lazy(() => import('./pages/Home')));
const About = Loadable(lazy(() => import('./pages/About')));
const PageNotFound = Loadable(lazy(() => import('./pages/PageNotFound')));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate replace to='/home' />,
  },
  {    
    path: '*',
    element: <MainLayout />,
    children: [      
      {
        path: 'home',
        index: true,
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />
      },      
      {
        path: '404',
        element: <PageNotFound />,
      },
      {
        path: '*',
        element: <Navigate replace to='/404' />
      }
    ]
  },
];

export default routes;