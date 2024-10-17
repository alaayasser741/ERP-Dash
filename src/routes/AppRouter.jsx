import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { routes } from "../data/constant";
import { Sidebar } from "../components";
import { useState } from "react";

const AppRouter = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [drawerWidth, setDrawerWidth] = useState(240);

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

      <div style={{ marginLeft: `${drawerWidth}px`, padding: "20px" }}>
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
    </Router>
  );
};

export default AppRouter;
