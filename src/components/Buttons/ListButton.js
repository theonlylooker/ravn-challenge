import React from "react";
import ViewListIcon from "@mui/icons-material/ViewList";
import { IconButton } from "@mui/material";
const ListButton = () => {
  return (
    <div>
      <IconButton>
        <ViewListIcon sx={{ color: "white" }} />
      </IconButton>
    </div>
  );
};

export default ListButton;
