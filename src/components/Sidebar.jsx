import { Link, useLocation } from "react-router-dom";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  ListItemIcon,
  IconButton,
} from "@mui/material";
import { routes } from "../data/constant";
import { LogoIcon, DoubleArrowIcon } from "../assets/icons";
import { getActiveRoute } from "../lib/utils";

const Sidebar = ({ toggleDrawer, drawerWidth, collapsed }) => {
  const location = useLocation();
  const activeRoute = getActiveRoute(routes, location);

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          backgroundColor: "#026980",
          paddingBlock: "40px",
          transition: "all .3s",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <IconButton
        aria-label="toggle side bar"
        sx={{
          position: "absolute",
          top: "10px",
          right: "15px",
          color: "white",
          border: "1px solid transparent",
          transition: "all .5s",
          "&:hover": {
            borderColor: "#f3f3f3",
          },

          transform: collapsed ? "rotate(180deg)" : "rotate(0deg)",
        }}
        onClick={toggleDrawer}
      >
        <DoubleArrowIcon />
      </IconButton>

      {!collapsed && (
        <ListItem
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBlockEnd: "20px",
          }}
        >
          <LogoIcon />
        </ListItem>
      )}
      <List>
        {routes.map((route) => (
          <ListItem
            sx={{
              color: "white",
              paddingInline: "10px",
            }}
            key={route.path}
            component={Link}
            to={route.path}
          >
            {!collapsed ? (
              <ListItemButton
                sx={{
                  borderRadius: "10px",
                  gap: "1rem",
                }}
                className={`iconHover ${
                  activeRoute?.path === route.path ? "activeRoute" : ""
                }`}
              >
                <ListItemIcon
                  sx={{
                    minWidth: "fit-content",
                  }}
                >
                  {" "}
                  {route.icon && <route.icon />}{" "}
                </ListItemIcon>
                <ListItemText primary={route.name} />
              </ListItemButton>
            ) : (
              <IconButton
                sx={{
                  color: "white",
                  "&:hover": {
                    color: "#f3f3f3",
                  },
                }}
                className="iconHover"
              >
                {route.icon && <route.icon />}
              </IconButton>
            )}
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
