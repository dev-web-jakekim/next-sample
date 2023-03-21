import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';


export const APP_MENU_LIST = [
  {
    name: 'page1',
  },
  {
    name: 'page2',
  },
  {
    name: 'page3',
  },
];

const ConnectedApp: NextPage = () => {
  const routes = useRouter();

  const routeDefaultPage = () => {
    routes.push(APP_MENU_LIST[0].name);
  };

  useEffect(() => {
    routeDefaultPage();
  }, []);

  return <div>This is ConnectedApp Home Next Page</div>;
};

export default ConnectedApp;
