import * as React from "react";
import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CancelIcon from "@mui/icons-material/Cancel";
import Backdrop from "@mui/material/Backdrop";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";

import { openIssue, getUser } from "../../../API";
import Chat from "./Chat/Chat";

export default function IssueCard(props) {
  const [user, setUser] = useState({});

  const handleResolve = async () => {
    const data = await openIssue(props.data._id, props.userid);
    if (data.status === "ok") {
      props.closecard();
      props.update();
    } else {
      console.log(data);
    }
  };

  useEffect(() => {
    const fetchUser = async () => {
      const data = await getUser(props.data.userId);
      if (data.status === "ok") {
        setUser(data.user);
      } else {
        console.log(data);
      }
    };
    fetchUser();
  });

  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open
    >
      <Card
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          zIndex: 10000,
          transform: "translate(-50%, -50%)",
          minWidth: 275,
          maxWidth: 500,
        }}
      >
        <CardHeader title={user.name} subheader={user.email} />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Title: {props.data.title}
            <br />
            Description: {props.data.description}
            <br />
            Status: {props.data.status}
            <br />
            Created On: {props.data.createdAt}
          </Typography>
          {props.data.status === "open" && <Chat />}
        </CardContent>
        <CardActions sx={{ justifyContent: "space-around" }}>
          {props.data.status === "pending" && (
            <IconButton aria-label="resolve" onClick={handleResolve}>
              <MarkEmailReadIcon />
            </IconButton>
          )}
          <IconButton aria-label="close" onClick={props.closecard}>
            <CancelIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Backdrop>
  );
}
