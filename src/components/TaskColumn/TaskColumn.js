import { Box } from "@mui/material";
import React from "react";
import TaskCard from "../TaskCard/TaskCard";

const TaskColumn = ({ columnName }) => {
  return (
    <div>
      <Box m="6px 6px 6px 6px">
        {columnName} <TaskCard />
        <TaskCard />{" "}
      </Box>{" "}
    </div>
  );
};

export default TaskColumn;
