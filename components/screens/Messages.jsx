import Head from "next/head";
import React from "react";
import Navbar from "../header/Navbar";
import { Avatar } from "@mui/material";
import RecentActivity from "../sidebar/RecentActivity";
import styles from "../../styles/messages.module.css";
import UserSearchBox from "../utils/UserSearchBox";
import Glass from "../ui/Glass";
import Link from "next/link";
import Flex from "../ui/Flex";

const Messages = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Messages - Paathshaala</title>
      </Head>

      <div className="flex f-space-eve f-start">
        <section className={styles.messages_main_section}>
          <Navbar>
            <h3>Messages</h3>
          </Navbar>

          <Flex>
            <UserSearchBox />
          </Flex>
          <Glass className={styles.msg_box}>
            <div className={styles.user_contacts}>
              <Link href={`messages/${1}`}>
                <div className="flex">
                  <Avatar sx={{ my: 1, mr: 1 }} />
                  <div className="info flex f-start f-space-eve">
                    <span className="flex f-start f-column">
                      <h4>User 1</h4>
                      <p>Lorem ipsum dolor sit.</p>
                    </span>
                  </div>
                </div>
              </Link>
              <div className="flex">
                <Avatar sx={{ my: 1, mr: 1 }} />
                <div className="info flex f-start f-space-eve">
                  <span className="flex f-start f-column">
                    <h4>User 2</h4>
                    <p>Lorem ipsum dolor sit.</p>
                  </span>
                </div>
              </div>
              <div className="flex">
                <Avatar sx={{ my: 1, mr: 1 }} />
                <div className="info flex f-start f-space-eve">
                  <span className="flex f-start f-column">
                    <h4>User 3</h4>
                    <p>Lorem ipsum dolor sit.</p>
                  </span>
                </div>
              </div>
              <div className="flex">
                <Avatar sx={{ my: 1, mr: 1 }} />
                <div className="info flex f-start f-space-eve">
                  <span className="flex f-start f-column">
                    <h4>User 4</h4>
                    <p>Lorem ipsum dolor sit.</p>
                  </span>
                </div>
              </div>
              <div className="flex">
                <Avatar sx={{ my: 1, mr: 1 }} />
                <div className="info flex f-start f-space-eve">
                  <span className="flex f-start f-column">
                    <h4>User 5</h4>
                    <p>Lorem ipsum dolor sit.</p>
                  </span>
                </div>
              </div>
              <div className="flex">
                <Avatar sx={{ my: 1, mr: 1 }} />
                <div className="info flex f-start f-space-eve">
                  <span className="flex f-start f-column">
                    <h4>User 6</h4>
                    <p>Lorem ipsum dolor sit.</p>
                  </span>
                </div>
              </div>
              <div className="flex">
                <Avatar sx={{ my: 1, mr: 1 }} />
                <div className="info flex f-start f-space-eve">
                  <span className="flex f-start f-column">
                    <h4>User 7</h4>
                    <p>Lorem ipsum dolor sit.</p>
                  </span>
                </div>
              </div>
            </div>
          </Glass>
        </section>

        <section className="section_activity">
          <RecentActivity />
        </section>
      </div>
    </React.Fragment>
  );
};

export default Messages;
