import React from "react";
import RecentActivity from "../sidebar/RecentActivity";
import styles from "../../styles/notification.module.css";
import Navbar from "../header/Navbar";
import { Button, Chip } from "@mui/material";
import Flex from "../ui/Flex";
import { Stack } from "@mui/system";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

const Article = () => {
  const { data: session } = useSession();
  const route = useRouter();

  return (
    <React.Fragment>
      <div className="flex f-space-eve f-start">
        <section className={styles.notification_main_section}>
          <Navbar>
            <h3>Articles</h3>
          </Navbar>
          <Button
            color="primary"
            className={styles.Notification_box + " flex f-column f-start"}
            onClick={() => route.push("/article/1")}
          >
            <Flex className={styles.user_info + " f-start"}>
              <h3>Article Name</h3>
            </Flex>
            <Stack direction="row" spacing={1}>
              <Chip
                label="Clickable"
                variant="outlined"
                sx={{
                  color: "var(--font-color)",
                  fontSize: "10px",
                  opacity: "0.5",
                }}
              />
              <Chip
                label="Clickable"
                variant="outlined"
                sx={{
                  color: "var(--font-color)",
                  fontSize: "10px",
                  opacity: "0.5",
                }}
              />
              <Chip
                label="Clickable"
                variant="outlined"
                sx={{
                  color: "var(--font-color)",
                  fontSize: "10px",
                  opacity: "0.5",
                }}
              />
            </Stack>
            <p className={styles.notification_statement}>Article Caption...</p>
          </Button>
          <Button
            color="primary"
            className={styles.Notification_box + " flex f-column f-start"}
            onClick={() => route.push("/article/1")}
          >
            <Flex className={styles.user_info + " f-start"}>
              <h3>Article Name</h3>
            </Flex>
            <Stack direction="row" spacing={1}>
              <Chip
                label="Clickable"
                variant="outlined"
                sx={{
                  color: "var(--font-color)",
                  fontSize: "10px",
                  opacity: "0.5",
                }}
              />
              <Chip
                label="Clickable"
                variant="outlined"
                sx={{
                  color: "var(--font-color)",
                  fontSize: "10px",
                  opacity: "0.5",
                }}
              />
              <Chip
                label="Clickable"
                variant="outlined"
                sx={{
                  color: "var(--font-color)",
                  fontSize: "10px",
                  opacity: "0.5",
                }}
              />
            </Stack>
            <p className={styles.notification_statement}>Article Caption...</p>
          </Button>{" "}
          <Button
            color="primary"
            className={styles.Notification_box + " flex f-column f-start"}
            onClick={() => route.push("/article/1")}
          >
            <Flex className={styles.user_info + " f-start"}>
              <h3>Article Name</h3>
            </Flex>
            <Stack direction="row" spacing={1}>
              <Chip
                label="Clickable"
                variant="outlined"
                sx={{
                  color: "var(--font-color)",
                  fontSize: "10px",
                  opacity: "0.5",
                }}
              />
              <Chip
                label="Clickable"
                variant="outlined"
                sx={{
                  color: "var(--font-color)",
                  fontSize: "10px",
                  opacity: "0.5",
                }}
              />
              <Chip
                label="Clickable"
                variant="outlined"
                sx={{
                  color: "var(--font-color)",
                  fontSize: "10px",
                  opacity: "0.5",
                }}
              />
            </Stack>
            <p className={styles.notification_statement}>Article Caption...</p>
          </Button>{" "}
          <Button
            color="primary"
            className={styles.Notification_box + " flex f-column f-start"}
            onClick={() => route.push("/article/1")}
          >
            <Flex className={styles.user_info + " f-start"}>
              <h3>Article Name</h3>
            </Flex>
            <Stack direction="row" spacing={1}>
              <Chip
                label="Clickable"
                variant="outlined"
                sx={{
                  color: "var(--font-color)",
                  fontSize: "10px",
                  opacity: "0.5",
                }}
              />
              <Chip
                label="Clickable"
                variant="outlined"
                sx={{
                  color: "var(--font-color)",
                  fontSize: "10px",
                  opacity: "0.5",
                }}
              />
              <Chip
                label="Clickable"
                variant="outlined"
                sx={{
                  color: "var(--font-color)",
                  fontSize: "10px",
                  opacity: "0.5",
                }}
              />
            </Stack>
            <p className={styles.notification_statement}>Article Caption...</p>
          </Button>{" "}
          <Button
            color="primary"
            className={styles.Notification_box + " flex f-column f-start"}
            onClick={() => route.push("/article/1")}
          >
            <Flex className={styles.user_info + " f-start"}>
              <h3>Article Name</h3>
            </Flex>
            <Stack direction="row" spacing={1}>
              <Chip
                label="Clickable"
                variant="outlined"
                sx={{
                  color: "var(--font-color)",
                  fontSize: "10px",
                  opacity: "0.5",
                }}
              />
              <Chip
                label="Clickable"
                variant="outlined"
                sx={{
                  color: "var(--font-color)",
                  fontSize: "10px",
                  opacity: "0.5",
                }}
              />
              <Chip
                label="Clickable"
                variant="outlined"
                sx={{
                  color: "var(--font-color)",
                  fontSize: "10px",
                  opacity: "0.5",
                }}
              />
            </Stack>
            <p className={styles.notification_statement}>Article Caption...</p>
          </Button>{" "}
          <Button
            color="primary"
            className={styles.Notification_box + " flex f-column f-start"}
            onClick={() => route.push("/article/1")}
          >
            <Flex className={styles.user_info + " f-start"}>
              <h3>Article Name</h3>
            </Flex>
            <Stack direction="row" spacing={1}>
              <Chip
                label="Clickable"
                variant="outlined"
                sx={{
                  color: "var(--font-color)",
                  fontSize: "10px",
                  opacity: "0.5",
                }}
              />
              <Chip
                label="Clickable"
                variant="outlined"
                sx={{
                  color: "var(--font-color)",
                  fontSize: "10px",
                  opacity: "0.5",
                }}
              />
              <Chip
                label="Clickable"
                variant="outlined"
                sx={{
                  color: "var(--font-color)",
                  fontSize: "10px",
                  opacity: "0.5",
                }}
              />
            </Stack>
            <p className={styles.notification_statement}>Article Caption...</p>
          </Button>{" "}
          <Button
            color="primary"
            className={styles.Notification_box + " flex f-column f-start"}
            onClick={() => route.push("/article/1")}
          >
            <Flex className={styles.user_info + " f-start"}>
              <h3>Article Name</h3>
            </Flex>
            <Stack direction="row" spacing={1}>
              <Chip
                label="Clickable"
                variant="outlined"
                sx={{
                  color: "var(--font-color)",
                  fontSize: "10px",
                  opacity: "0.5",
                }}
              />
              <Chip
                label="Clickable"
                variant="outlined"
                sx={{
                  color: "var(--font-color)",
                  fontSize: "10px",
                  opacity: "0.5",
                }}
              />
              <Chip
                label="Clickable"
                variant="outlined"
                sx={{
                  color: "var(--font-color)",
                  fontSize: "10px",
                  opacity: "0.5",
                }}
              />
            </Stack>
            <p className={styles.notification_statement}>Article Caption...</p>
          </Button>
        </section>
        <section className="section_activity">
          <RecentActivity>
            {session && (
              <Button
                style={{
                  width: "85%",
                  height: "60px",
                }}
                variant="contained"
                onClick={() => route.push("/article/compose")}
              >
                Compose{" "}
              </Button>
            )}
          </RecentActivity>
        </section>
      </div>
    </React.Fragment>
  );
};

export default Article;
