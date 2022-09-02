import React, { useEffect, useState } from "react";
import Glass from "../ui/Glass";
import SearchBox from "../utils/SearchBox";
import Flex from "../ui/Flex";
import Wallet from "../utils/Wallet";
import { Avatar, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const RecentActivity = (props) => {
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    const subscribe = () => {
      document
        .querySelector(".section_activity")
        ?.classList.remove("display-sidebar-menu");
    };
    return subscribe;
  }, [openMenu]);
  return (
    <Flex className="f-column">
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
      <SearchBox />
      <Wallet />
      {props.children}
      <Glass className="activity_container flex">
        <h4>No Recent User Activities</h4>
      </Glass>

      <Glass className="activity_container flex f-column">
        <h3 className="flex f-start">What’s happening</h3>
        <div className="info flex f-space-btw">
          <span className="flex f-start f-column">
            <h4>heading</h4>
            <p>Lorem ipsum dolor sit.</p>
          </span>
          <Avatar alt="P" src="/static/images/avatar/1.jpg" />
        </div>
        <div className="info flex f-space-btw">
          <span className="flex f-start f-column">
            <h4>heading</h4>
            <p>Lorem ipsum dolor sit.</p>
          </span>
          <Avatar alt="K" src="/static/images/avatar/1.jpg" />
        </div>{" "}
        <div className="info flex f-space-btw">
          <span className="flex f-start f-column">
            <h4>heading</h4>
            <p>Lorem ipsum dolor sit.</p>
          </span>
          <Avatar alt="U" src="/static/images/avatar/1.jpg" />
        </div>{" "}
        <div className="info flex f-space-btw">
          <span className="flex f-start f-column">
            <h4>heading</h4>
            <p>Lorem ipsum dolor sit.</p>
          </span>
          <Avatar alt="L" src="/static/images/avatar/1.jpg" />
        </div>
      </Glass>
    </Flex>
  );
};

export default RecentActivity;
