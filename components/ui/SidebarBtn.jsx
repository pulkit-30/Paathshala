import React from "react";
import IconButton from "@mui/material/IconButton";
import { useRouter } from "next/router";
import Flex from "./Flex";

const SidebarBtn = (props) => {
  const router = useRouter();
  return (
    <IconButton
      className="flex f-start"
      size="small"
      style={{
        padding: 20,
        borderRadius: "50px",
        margin: "10px 0px",
        width: "100%",
        fontSize: "1.25rem",
      }}
      sx={{
        color: "var(--font-color)",
        "&:hover": {
          backgroundColor: "var(--hover-color)",
        },
        "&:focus": {
          backgroundColor: "var(--hover-color-dark)",
        },
      }}
      onClick={() => {
        router.push(props.route);
        props.onClick && props.onClick();
      }}
    >
      <Flex>
        {props.icon}
        <div style={{ marginLeft: "15px" }}>{props.name}</div>
      </Flex>
    </IconButton>
  );
};

export default SidebarBtn;
