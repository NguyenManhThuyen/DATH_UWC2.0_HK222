import React from 'react';
import ReactDOM from 'react-dom/client';

import './scss/styles.scss';
import * as bootstrap from 'bootstrap';

import { Provider } from 'react-redux';
import store from './store/store';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

import MainPage from '@pages/main/MainPage';
import StaffPage from '@pages/Staff/StaffPage';
import Login from '@pages/Login/Login';
import ForgotPass from '@pages/ForgotPass/ForgotPass';
import TaskManagement from '@pages/TaskManagement/TaskManagement';
import TaskList from '@pages/TaskList/TaskList';
import TaskView from '@pages/TaskView/TaskView';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/forgot',
    element: <ForgotPass />,
  },
  {
    path: '/user-info',
    element: <MainPage />,
  },
  {
    path: '/calendar',
    element: <MainPage />,
  },
  {
    path: '/shifts',
    element: <MainPage />,
  },
  {
    path: '/collecting-sites',
    element: <MainPage />,
  },
  {
    path: '/staffs',
    element: <StaffPage />,
  },
  {
    path: '/settings',
    element: <MainPage />,
  },
  {
    path: '/logout',
    element: <MainPage />,
  },
  {
    path: '/task-manager',
    element: <TaskManagement />
  },
  {
    path: '/task-list',
    element: <TaskList />
  },
  {
    path: '/task-view',
    element: <TaskView />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}> 
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
