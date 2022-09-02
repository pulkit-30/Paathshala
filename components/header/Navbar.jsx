import React, { useEffect, useState } from "react";
import Glass from "../ui/Glass";
import styles from "../../styles/navbar.module.css";
import { IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { router, useRouter } from "next/router";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = (props) => {
  const router = useRouter();
  const [openMenu, setOpenMenu] = useState(false);
  useEffect(() => {
    const subscribe = () => {
      openMenu &&
        document
          .querySelector(".main_sidebar")
          ?.classList.add("display-sidebar-menu");
    };
    return subscribe;
  }, [openMenu]);
  return (
    <Glass className={styles.navbar + " flex f-start " + props.className}>
      <IconButton
        aria-label="back"
        color="primary"
        onClick={() => router.back()}
      >
        <ArrowBackIcon />
      </IconButton>
      {props.children}

      <IconButton
        aria-label="hamburger"
        className="hamburger"
        onClick={() => {
          setOpenMenu(true);
          setTimeout(() => {
            setOpenMenu(false);
          }, 200);
        }}
      >
        <MenuIcon />
      </IconButton>
    </Glass>
  );
};

export default Navbar;
