import { Drawer, List } from "@mui/material";
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
import SideBarGlobalItem from "../SideBarGlobalItem/SideBarGlobalItem";
const drawerWidth = 240;
const useStyles = makeStyles({
  drawerpaper: {
    width: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
  },
});
const SideBar = () => {
  const classes = useStyles();
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
          sx: { backgroundColor: "#2C2F33", color: "#94979A" },
        }}
        className={classes.drawer}
        variant="permanent"
        anchor="left"
        classes={{ paper: classes.drawerpaper }}
      >
        <div>
          <FortIcon></FortIcon>
        </div>

        <List
          sx={{
            "&& .Mui-selected, && .Mui-selected:hover": {
              background:
                "linear-gradient(90deg, rgba(44,47,51,1) 95%, rgba(218,88,75,1) 100%, rgba(218,88,75,1) 100%, rgba(218,88,75,1) 100%)",
              "&, & .MuiListItemIcon-root": {
                color: "#DA584B",
              },
            },
            "& .MuiListItemButton-root:hover": {
              "&, & .MuiListItemIcon-root": {
                color: "#DA584B",
              },
            },
          }}
        >
          {menuItem.map((item) => (
            <SideBarGlobalItem
              key={item.text}
              text={item.text}
              path={item.path}
              icon={item.icon}
            />
          ))}
        </List>
      </Drawer>
    </div>
  );
};

export default SideBar;
