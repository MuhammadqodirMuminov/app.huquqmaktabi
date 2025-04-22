import { Navigate, useRoutes } from 'react-router-dom';

import { History, Lawyers, LawyersDetail, Reforms } from './loadable';

import { Layout } from '@/modules';
import { ROUTES } from '@/constants';
import Home from '@/pages/home';

const Router = () => {
  return useRoutes([
    {
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Navigate to={ROUTES.home} />,
        },
        {
          path: ROUTES.home,
          element: <Home />,
        },
        {
          path: ROUTES.history,
          element: <History />,
        },
        {
          path: ROUTES.reforms,
          element: <Reforms />,
        },
        {
          path: ROUTES.lawyers,

          children: [
            {
              index: true,
              element: <Lawyers />,
            },
            {
              path: ROUTES.single,
              element: <LawyersDetail />,
            },
          ],
        },
      ],
    },
  ]);
};

export default Router;
