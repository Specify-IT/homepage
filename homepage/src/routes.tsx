import { Suspense, lazy } from 'react';
import MainLayout from './layout/MainLayout';
import { RouteObject } from 'react-router-dom';
import LoadingScreen from './LoadingScreen';

const Loadable = (Component: any) => (props: JSX.IntrinsicAttributes) =>
  (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );

const Home = Loadable(lazy(() => import('./pages/Home')));
const About = Loadable(lazy(() => import('./pages/About')));

const routes: RouteObject[] = [
  {
    path: '*',
    element: <MainLayout />,
    children: [
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'home',
        index: true,
        element: <Home />,
      },
      {
        path: '*',
        index: true,
        element: <Home />,
      }
    ]
  },
];

export default routes;