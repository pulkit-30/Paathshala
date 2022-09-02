import React, { useEffect, useState } from "react";
import Stack from "@mui/material/Stack";
import SidebarBtn from "../ui/SidebarBtn";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import QuestionAnswerOutlinedIcon from "@mui/icons-material/QuestionAnswerOutlined";
import KeyboardBackspaceOutlinedIcon from "@mui/icons-material/KeyboardBackspaceOutlined";
import ThemeMode from "../utils/ThemeMode";
import Image from "next/image";
import Flex from "../ui/Flex";
import CloseIcon from "@mui/icons-material/Close";
import { Avatar, Button, IconButton } from "@mui/material";
import WalletIcon from "@mui/icons-material/Wallet";
import { signOut, useSession } from "next-auth/react";
import MoreItems from "../utils/Moreitems";
import EventIcon from "@mui/icons-material/Event";
import ForkLeftIcon from "@mui/icons-material/ForkLeft";
import ArticleIcon from "@mui/icons-material/Article";
import LoginIcon from "@mui/icons-material/Login";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import { useRouter } from "next/router";

const MainSidebar = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [openMenu, setOpenMenu] = useState(false);
  const [openActivityMenu, setOpenActivityMenu] = useState(false);

  useEffect(() => {
    const subscribe = () => {
      document
        .querySelector(".main_sidebar")
        ?.classList.remove("display-sidebar-menu");
    };
    return subscribe;
  }, [openMenu]);

  useEffect(() => {
    const subscribe = () => {
      openActivityMenu &&
        document
          .querySelector(".section_activity")
          ?.classList.add("display-sidebar-menu");
    };
    return subscribe;
  }, [openActivityMenu]);

  // user logout function

  return (
    <React.Fragment>
      <IconButton
        aria-label="close button"
        className="hamburger"
        onClick={() => {
          if (openMenu) setOpenMenu(false);
          else setOpenMenu(true);
        }}
      >
        <CloseIcon />
      </IconButton>
      <Stack
        direction="column"
        spacing={1}
        justifyContent="flex-start"
        alignItems="flex-start"
        className="main-btn"
      >
        <Flex className="main-sidebar-logo">
          <Image
            src="/logo.svg"
            alt="main-sidebar-logo"
            width={50}
            height={50}
          />
          &nbsp; &nbsp;
          <h2>Paathshaala</h2>
        </Flex>
        <SidebarBtn name="Home" icon={<HomeOutlinedIcon />} route="/" />

        <React.Fragment>
          <div
            className="activity-responsive-btn"
            onClick={() => {
              setOpenActivityMenu(true);
              setTimeout(() => {
                setOpenActivityMenu(false);
              }, 200);
            }}
          >
            <SidebarBtn name="Activity" icon={<WalletIcon />} route="#" />
          </div>
          <SidebarBtn
            name="Doubt Forum"
            icon={<QuestionAnswerOutlinedIcon />}
            route="/doubt"
          />

          {session && (
            <React.Fragment>
              <SidebarBtn
                name="Messages"
                icon={<EmailOutlinedIcon />}
                route="/messages"
              />
              <SidebarBtn
                name="Notification"
                icon={<NotificationsNoneOutlinedIcon />}
                route="/notification"
              />
            </React.Fragment>
          )}
          {!session && (
            <React.Fragment>
              <SidebarBtn
                name="Articles"
                icon={<ArticleIcon />}
                route="/article"
              />{" "}
              <SidebarBtn name="Events" icon={<EventIcon />} route="/event" />
              <SidebarBtn
                name="Roadmaps"
                icon={<ForkLeftIcon />}
                route="/roadmap"
              />
            </React.Fragment>
          )}
          {session && (
            <React.Fragment>
              <SidebarBtn
                name={session?.user?.name || "Profile"}
                icon={<Avatar style={{ width: "30px", height: "30px" }} />}
                route="/user/profile/0"
              />
              <MoreItems />
              <Button
                variant="outlined"
                color="error"
                style={{
                  width: "80%",
                  padding: "10px",
                  borderRadius: "50px",
                }}
                onClick={signOut}
              >
                <KeyboardBackspaceOutlinedIcon />
                &nbsp;LogOut
              </Button>
            </React.Fragment>
          )}
        </React.Fragment>
        {!session && (
          <React.Fragment>
            <Button
              variant="outlined"
              color="primary"
              style={{
                width: "80%",
                padding: "10px",
                borderRadius: "50px",
              }}
              onClick={() => router.push("/login")}
            >
              <LoginIcon />
              &nbsp;Sign In
            </Button>
            <Button
              variant="outlined"
              color="primary"
              style={{
                width: "80%",
                padding: "10px",
                borderRadius: "50px",
              }}
              onClick={() => router.push("/register")}
            >
              <PersonAddAlt1Icon />
              &nbsp;Sign Up
            </Button>
          </React.Fragment>
        )}
      </Stack>
      <ThemeMode />
    </React.Fragment>
  );
};

export default MainSidebar;
