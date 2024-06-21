import type { RouteObject } from 'react-router-dom';

import AuthPage from './components/AuthPage.tsx';

const routes: RouteObject[] = [
  {
    path: '/login',
    element: <AuthPage />,
  },
];

export default routes;
