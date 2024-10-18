import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { routes } from "../data/constant";
import { Sidebar } from "../components";
import { useEffect, useState } from "react";
import { NavBar } from "../components";

const AppRouter = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [drawerWidth, setDrawerWidth] = useState(240);

  // ! if screen is small, collapse the sidebar
  useEffect(() => {
    if (window.innerWidth < 960) {
      setCollapsed(true);
      setDrawerWidth(60);
    }
  }, []);
  const toggleDrawer = () => {
    setCollapsed(!collapsed);
    setDrawerWidth(collapsed ? 240 : 60);
  };

  return (
    <Router>
      <Sidebar
        collapsed={collapsed}
        drawerWidth={drawerWidth}
        toggleDrawer={toggleDrawer}
      />

      <div style={{ marginLeft: `${drawerWidth}px` }}>
        <NavBar />
        <div style={{ padding: "20px" }}>
          <Routes>
            {routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={<route.component />}
              />
            ))}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default AppRouter;
