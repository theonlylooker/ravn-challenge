import React from "react";
import GridButton from "../Buttons/GridButton";
import ListButton from "../Buttons/ListButton";
import PlusButton from "../Buttons/PlusButton";
import TaskCard from "../TaskCard/TaskCard";
import TaskColumn from "../TaskColumn/TaskColumn";

const MainContent = () => {
  const columns = ["Backlog", "Cancelled", "Done", "In Progress", "TODO"];
  return (
    <div>
      MainContent
      <PlusButton></PlusButton>
      <GridButton></GridButton>
      <ListButton></ListButton>
      <TaskColumn></TaskColumn>
    </div>
  );
};

export default MainContent;
