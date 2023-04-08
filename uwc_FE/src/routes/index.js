import ListTypeCalendarView from "../components/App/ListTypeCalendarView"
import TaskListInfoCalendarView from "../components/App/TaskListInfoCalendarView"
import AttendanceView from "../components/App/AttendanceView"

export const publicRoutes = [{
        path: "/",
        component: ListTypeCalendarView,
        layout: 0

    },
    {
        path: "/TaskListInfoCalendarView",
        component: TaskListInfoCalendarView,
        layout: 0
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