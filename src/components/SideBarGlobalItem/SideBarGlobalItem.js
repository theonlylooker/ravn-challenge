import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const SideBarGlobalItem = ({ text, path, icon }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const handleClick = (e) => {
    navigate(path);
  };
  return (
    <div>
      <ListItemButton
        onClick={handleClick}
        selected={path === location.pathname}
      >
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={text} />
      </ListItemButton>
    </div>
  );
};

export default SideBarGlobalItem;
