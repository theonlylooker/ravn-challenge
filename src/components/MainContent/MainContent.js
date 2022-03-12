import { Box } from "@mui/material";
import React from "react";
import GridButton from "../Buttons/GridButton";
import ListButton from "../Buttons/ListButton";
import PlusButton from "../Buttons/PlusButton";
import TaskCard from "../TaskCard/TaskCard";
import TaskColumn from "../TaskColumn/TaskColumn";
import { gql, useQuery } from "@apollo/client";
const GetTasksQUERY = gql`
  query GetTasks() {
    tasks(input:FilterTaskInput) {
      id,
      name,
      position,
      status,
      tags,
    }
  }
`;

const MainContent = () => {
  const columns = ["Backlog", "Cancelled", "Done", "In Progress", "TODO"];
  const { data, loading, error } = useQuery(GetTasksQUERY);
  if (loading) return <p>...LOADING</p>;
  if (error) return <p>ERROR =(</p>;

  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <ListButton />
        <GridButton />
        <Box sx={{ flexGrow: 1 }}></Box>
        <PlusButton />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          color: "#FFFFFF",
        }}
      >
        {columns.map((item) => (
          <TaskColumn columnName={item} />
        ))}
      </Box>
    </div>
  );
};

export default MainContent;
