import { Avatar, IconButton, InputBase, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import React from "react";

const NavBar = () => {
  return (
    <div>
      <Paper
        component="form"
        sx={{
          p: "2px 4px",
          m: "10px",
          display: "flex",
          alignItems: "center",
          width: "80vw",
          borderRadius: "10px",
          background: "#2C2F33",
        }}
      >
        <IconButton>
          <SearchIcon sx={{ color: "#94979A" }} />
        </IconButton>
        <InputBase
          placeholder="Search"
          sx={{ ml: 1, flex: 1, backgroundColor: "inherit", color: "#94979A" }}
        />
        <IconButton>
          <NotificationsNoneIcon sx={{ color: "#94979A" }} />
        </IconButton>
        <Avatar sx={{ width: 24, height: 24 }}>H</Avatar>
      </Paper>
    </div>
  );
};

export default NavBar;
