import { Chip } from "@mui/material";
import React from "react";
import AccessAlarmsIcon from "@mui/icons-material/AccessAlarms";
const Tag = ({ text, backgroundColor, color, icon }) => {
  return (
    <div>
      {icon ? (
        <Chip
          icon={<AccessAlarmsIcon />}
          label="label1"
          sx={{ borderRadius: 1, color: color }}
        />
      ) : (
        <Chip label="label1" sx={{ borderRadius: 1, color: color }} />
      )}
    </div>
  );
};

export default Tag;
