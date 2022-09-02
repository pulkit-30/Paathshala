import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useRouter } from "next/router";

const Moreitems = () => {
  const route = useRouter();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <Button
        variant="outlined"
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        style={{
          width: "80%",
          padding: "10px",
          borderRadius: "50px",
          margin: "10px 0px",
        }}
      >
        <MoreHorizIcon /> &nbsp; More
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        style={{
          margin: "auto",
        }}
      >
        <MenuItem
          onClick={() => {
            route.push("/article");
            handleClose();
          }}
          style={{
            width: "250px",
            padding: "10px",
          }}
        >
          Articles
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          style={{
            width: "250px",
            padding: "10px",
          }}
        >
          Events
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          style={{
            width: "250px",
            padding: "10px",
          }}
        >
          Roadmaps
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          style={{
            width: "250px",
            padding: "10px",
          }}
        >
          Interactive Session
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
};

export default Moreitems;
