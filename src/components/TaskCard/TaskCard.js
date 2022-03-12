import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AttachmentIcon from "@mui/icons-material/Attachment";
import SchemaIcon from "@mui/icons-material/Schema";
import CommentIcon from "@mui/icons-material/Comment";
import React from "react";
import Tag from "../Tag/Tag";

const TaskCard = ({ commentaries, points, jobs }) => {
  return (
    <div>
      <Tag></Tag>
      TaskCard
      <Card sx={{ color: "#FFFFFF", background: "#2C2F33" }}>
        <CardHeader
          title="nombre"
          action={
            <IconButton sx={{ color: "inherit" }}>
              <MoreVertIcon />
            </IconButton>
          }
        />
        <CardContent sx={{ display: "flex" }}>
          <Typography variant="body2" sx={{ flexGrow: 1 }}>
            {" "}
            points{points}
          </Typography>
          <Tag icon={true} />{" "}
        </CardContent>
        <CardActions disableSpacing>
          {" "}
          <Tag /> <Tag />
        </CardActions>
        <CardActions>
          {" "}
          <Avatar></Avatar>
          <Typography sx={{ flexGrow: 1 }} />
          <IconButton color="inherit">
            <AttachmentIcon />
          </IconButton>
          <Typography variant="body2">jobs{jobs}</Typography>
          <IconButton color="inherit">
            <SchemaIcon />
          </IconButton>
          <Typography variant="body2">commentaries{commentaries}</Typography>
          <IconButton color="inherit">
            <CommentIcon />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
};

export default TaskCard;
