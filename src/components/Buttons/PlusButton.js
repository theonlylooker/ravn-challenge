import React from "react";
import AddSharpIcon from "@mui/icons-material/AddSharp";
import { IconButton } from "@mui/material";
const PlusButton = () => {
  return (
    <div>
      <IconButton>
        <AddSharpIcon
          sx={{ color: "white", background: "#DA584B", borderRadius: 2 }}
        ></AddSharpIcon>
      </IconButton>
    </div>
  );
};

export default PlusButton;
