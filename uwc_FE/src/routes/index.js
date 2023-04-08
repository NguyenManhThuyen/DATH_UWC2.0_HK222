import ListTypeCalendarView from "../components/pages/ListTypeCalendarPage/ListTypeCalendarView"
import TaskListInfoCalendarView from "../components/pages/TaskListInfoCalendarPage/TaskListInfoCalendarView"
import AttendanceView from "../components/pages/AttendancePage/AttendanceView"
import TaskAssign from "../components/pages/taskAssign/Task-assign"
import Taskassign2 from "../components/pages/taskAssign1/Task-assign-2"
import Calender from "../components/pages/CalenderPage/Calendar_View"
export const publicRoutes = [{
        path: "/",
        component: Calender

    },
    {
        path: "/Task",
        component: Taskassign2
    },
    {
        path: "/TaskListInfoCalendarView",
        component: TaskListInfoCalendarView
    },
    {
        path: "/TaskAssign",
        component: TaskAssign
    },
    {
        path: "/ListTypeCalendarView",
        component: ListTypeCalendarView
    },
    {
        path: "/AttendanceView",
        component: AttendanceView,
        layout: 0
    },
    {
        path: "/Login",
        component: AttendanceView,
        layout: 1

    },

]