import { Chip } from "@mui/material";
import React from "react";
import AccessAlarmsIcon from "@mui/icons-material/AccessAlarms";
const Tag = ({ text, color, icon }) => {
  return (
    <div>
      {icon ? (
        <Chip
          icon={<AccessAlarmsIcon />}
          label="label1"
          color="secondary"
          sx={{ borderRadius: 1 }}
        />
      ) : (
        <Chip label="label1" color="secondary" sx={{ borderRadius: 1 }} />
      )}
    </div>
  );
};

export default Tag;
