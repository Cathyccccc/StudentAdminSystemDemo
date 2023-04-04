import React from 'react';
import {useRoutes, Navigate} from 'react-router-dom';
import Home from '../components/Home';
import About from '../components/About';
import AddOrEdit from "../components/AddOrEdit";
import Detail from "../components/Detail";
import Email from '../components/Email';
import Tel from '../components/Tel';

export default function Router() {
  return useRoutes([
    {
      path: '/home',
      element: <Home />
    },
    {
      path: '/about',
      element: <About />,
      children: [
        { path: 'email', element: <Email /> },
        { path: 'tel', element: <Tel /> },
        { path: '', element: <Navigate to='email' replace /> }
      ]
    },
    {
      path: '/add',
      element: <AddOrEdit />
    },
    {
      path: '/edit/:id',
      element: <AddOrEdit />
    },
    {
      path: '/detail/:id',
      element: <Detail />
    },
    {
      path: '/',
      element: <Navigate to='/home' replace />
    }
  ])
}
