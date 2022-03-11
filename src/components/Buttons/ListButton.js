import React from "react";
import ViewListIcon from "@mui/icons-material/ViewList";
import { IconButton } from "@mui/material";
const ListButton = () => {
  return (
    <div>
      <IconButton>
        <ViewListIcon sx={{ color: "white" }} />
      </IconButton>
      ListButton
    </div>
  );
};

export default ListButton;
