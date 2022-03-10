import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShopIcon from "@mui/icons-material/Shop";
import ListIcon from "@mui/icons-material/List";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import BarChartIcon from "@mui/icons-material/BarChart";
import SettingsIcon from "@mui/icons-material/Settings";
import FortIcon from "@mui/icons-material/Fort";
import { useLocation, useNavigate } from "react-router-dom";

const drawerWidth = 240;
const useStyles = makeStyles({
  drawerpaper: {
    width: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
  },
  active: {
    background: "#ffffff",
  },
});
const SideBar = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const location = useLocation();
  const menuItem = [
    { text: "DASHBOARD", icon: <DashboardIcon />, path: "/" },
    { text: "PROJECTS", icon: <ShopIcon />, path: "/projects" },
    { text: "MY TASK", icon: <ListIcon />, path: "/task" },
    { text: "CALENDAR", icon: <CalendarTodayIcon />, path: "/calendar" },
    { text: "TIME MANAGE", icon: <AccessTimeIcon />, path: "/manage" },
    { text: "REPORTS", icon: <BarChartIcon />, path: "/reports" },
    { text: "SETTINGS", icon: <SettingsIcon />, path: "/settings" },
  ];
  return (
    <div className="SideBar">
      SideBar{" "}
      <Drawer
        PaperProps={{
          style: { borderRadius: "20px 20px 20px 20px" },
          sx: { backgroundColor: "#202223", color: "#6D7175" },
        }}
        className={classes.drawer}
        variant="permanent"
        anchor="left"
        classes={{ paper: classes.drawerpaper }}
      >
        <div>
          <FortIcon></FortIcon>
        </div>

        <List>
          {menuItem.map((item) => (
            <ListItem
              button
              key={item.text}
              onClick={() => navigate(item.path)}
              className={location.pathname == item.path ? classes.active : null}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
};

export default SideBar;
