import React from "react";
import { Button, Box, Avatar, IconButton } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import Glass from "../ui/Glass";
import styles from "../../styles/doubtans.module.css";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined";

function DoubtNotification() {
  return (
    <div className="flex f-column">
      <Box sx={{ p: 2, border: "1px dashed grey" }}>
        <h3>
          You have received a reply to your query "What is Docker in devoops?"
          on Paathshaala
        </h3>
        <Glass className={styles.ans_box}>
          <div className="flex f-start">
            <Avatar sx={{ mr: 1, mt: 2 }} />{" "}
            <div className="f-column f-start" style={{ lineHeight: "70%" }}>
              <h3>
                Mustafa Khan{" "}
                <CheckCircleIcon
                  sx={{ color: "var(--primary-color)" }}
                  fontSize="small"
                />
              </h3>
              <p>answered, 5 hours ago</p>
            </div>
          </div>

          <br />
          <p className={styles.question_info}>
            Docker is a set of platform as a service products that use OS-level
            virtualization to deliver software in packages called containers.
            The service has both free and premium tiers. The software that hosts
            the containers is called Docker Engine.
          </p>

          <div className="flex f-start">
            <IconButton size="large" sx={{ my: 1 }}>
              <ThumbUpOutlinedIcon
                fontSize="small"
                sx={{ mr: 1, color: "var(--primary-color)" }}
              />{" "}
              <p
                style={{
                  fontWeight: 700,
                  color: "var(--primary-color)",
                }}
              >
                UPVOTE 9
              </p>
            </IconButton>
            <IconButton sx={{ my: 1 }}>
              <ThumbDownOutlinedIcon />
            </IconButton>
          </div>
        </Glass>

        <a href="tel:8076332196" style={{ marginLeft: "10px" }}>
          <Button variant="contained" startIcon={<CallIcon />}>
            Call to Mentor
          </Button>
        </a>
      </Box>

      <p>
        If you don't want this kind of notification furter, You can Unsubscribe
      </p>
    </div>
  );
}

export default DoubtNotification;
