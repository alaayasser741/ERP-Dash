import {
  DashboardIcon,
  TeamsIcon,
  EmployeesIcon,
  SettingsIcon,
} from "../assets/icons";
import Dashboard from "../pages/dashboard";
import teams from "../pages/teams";
import employees from "../pages/employees";
import settings from "../pages/settings";

const routes = [
  {
    name: "Dashboard",
    path: "/dashboard",
    component: Dashboard,
    icon: DashboardIcon,
  },
  {
    name: "Teams",
    path: "/teams",
    component: teams,
    icon: TeamsIcon,
  },
  {
    name: "Employees",
    path: "/employees",
    component: employees,
    icon: EmployeesIcon,
  },
  {
    name: "Settings",
    path: "/settings",
    component: settings,
    icon: SettingsIcon,
  },
];

export { routes };
