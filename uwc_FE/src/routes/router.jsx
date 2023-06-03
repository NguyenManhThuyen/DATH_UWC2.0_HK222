import { createBrowserRouter, Navigate } from 'react-router-dom';

import LoginView from '@views/LoginView';
import ForgotPassView from '@views/ForgotPassView';
import CalendarView from '@views/CalendarView';
import ShiftView from '@views/ShiftView';
import StaffView from '@views/StaffView';
import { TaskAssignView1, TaskAssignView2 } from '@views/TaskAssignView';
import TaskListView from '@views/TaskListView/TaskListView';
import TaskView from '@views/TaskView';
import DepotsView from '@views/DepotsView';
import Test from '@views/test';
import CreateStaff from '@views/CreateStaff/CreateStaff';

const AuthProxy = ({ element }) => {
  return localStorage.userLoggedIn === 'true' ? element : <Navigate to={'/login'} />;
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginView />,
  },
  {
    path: '/login',
    element: <AuthProxy element={<CalendarView />} />,
  },
  {
    path: '/logout',
    element: <Navigate to="/" />,
  },
  {
    path: '/calendar',
    element: <AuthProxy element={<CalendarView />} />,
  },
  {
    path: '/shifts',
    element: <AuthProxy element={<ShiftView />} />,
  },
  {
    path: '/shifts/:slug',
    element: <AuthProxy element={<TaskListView />} />,
  },
  {
    path: '/shifts/:slug/:slug2',
    element: <AuthProxy element={<TaskView />} />,
  },
  {
    path: '/collecting-sites',
    element: <DepotsView />,
  },
  {
    path: '/staffs',
    element: <AuthProxy element={<StaffView />} />,
  },
  {
    path: '/task-assign-1',
    element: <AuthProxy element={<TaskAssignView1 />} />,
  },
  {
    path: '/task-assign-2',
    element: <AuthProxy element={<TaskAssignView2 />} />,
  },
  {
    path: '/forgot',
    element: <ForgotPassView />,
  },
  {
    path: '/test',
    element: <Test />,
  },
  {
    path: '/createStaff',
    element: <CreateStaff />,
  }
]);

export default router;
