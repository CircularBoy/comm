import { RouteObject } from 'react-router-dom';

import HousesPage from './components';

const routes: RouteObject[] = [
  {
    path: '/houses',
    element: <HousesPage />,
  },
  // {
  //   path: '/house',
  //   element: Component(),
  // },
];

export default routes;
