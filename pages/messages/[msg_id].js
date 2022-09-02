import Head from "next/head";
import React from "react";
import Navbar from "../../components/header/Navbar";
import styles from "../../styles/chatbox.module.css";
import { Avatar, Box, TextField, IconButton } from "@mui/material";
import Glass from "../../components/ui/Glass";
import SendIcon from "@mui/icons-material/Send";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import RecentActivity from "../../components/sidebar/RecentActivity";

const Chatbox = () => {
  return (
    <React.Fragment>
      <Head>
        <title>User 1 Messages - Paathshaala</title>
      </Head>
      <div className="flex f-space-eve f-start">
        <section className={styles.chatbox_main_section}>
          <Navbar>
            <Avatar sx={{ mr: 1 }} />{" "}
            <div className="f-column" style={{ lineHeight: "60%" }}>
              <h3>User 1</h3>
              <p>Online</p>
            </div>
          </Navbar>
          <Glass className={styles.chat_box}>
            <div className="flex f-start">
              <ArrowLeftIcon
                sx={{ mr: -2.4, my: 1, color: "#202C33", fontSize: 25 }}
              />
              <Box
                sx={{
                  width: "max-content",
                  maxWidth: "60%",
                  bgcolor: "#202C33",
                  p: 1,
                  m: 1,
                }}
              >
                <p>This is message from user 1</p>
              </Box>
            </div>

            <div className="flex f-end">
              <Box
                sx={{
                  width: "max-content",
                  maxWidth: "60%",
                  bgcolor: "#005C4B",
                  p: 1,
                  m: 1,
                }}
              >
                <p>This is message from current user</p>
              </Box>
              <ArrowRightIcon
                sx={{ ml: -2.4, my: 2, color: "#005C4B", fontSize: 25 }}
              />
            </div>
          </Glass>
          <Box
            className={styles.msg_box + " flex"}
            sx={{
              bgcolor: "#7f7f7f49",
              borderTop: 1,
              boxShadow: 2,
              width: "100%",
            }}
          >
            <TextField
              id="filled-basic"
              variant="filled"
              multiline
              placeholder="Type a message"
              minRows={1}
              maxRows={3}
              sx={{
                width: "80%",
                my: 2,
                mx: 1,
                borderRadius: 2,
                bgcolor: "rgba(209,215,219,0.2)",
              }}
              InputProps={{
                disableUnderline: true,
                style: {
                  color: "var(--font-color)",
                  marginTop: -10,
                  background: "transparent",
                },
              }}
            />
            <IconButton sx={{ my: 2 }}>
              <SendIcon fontSize="large" sx={{ color: "#7C8B95" }} />
            </IconButton>
          </Box>
        </section>

        <section className="section_activity">
          <RecentActivity />
        </section>
      </div>
    </React.Fragment>
  );
};

export default Chatbox;
