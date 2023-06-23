import React, { useContext } from 'react';
import { useRoutes, Navigate } from 'react-router-dom';
import { authRoutes, publicRoutes } from '../routes';
import { SHOP_ROUTE } from '../utils/constants';
import { Context } from '../index';
import { observer } from 'mobx-react-lite';

const AppRouter = observer(() => {
  const { user } = useContext(Context);

  console.log(user);

  const routes = useRoutes([
    ...authRoutes.map(({ path, Component }) => ({
      path,
      element: <Component />,
    })),
    ...publicRoutes.map(({ path, Component }) => ({
      path,
      element: <Component />,
    })),
    { path: '*', element: <Navigate to={SHOP_ROUTE} replace /> },
  ]);

  return routes;
});

export default AppRouter;
