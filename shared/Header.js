import React from "react";
import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import "./Header.css";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import CustomizedSwitches from "./CustomizedSwitches";

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar>
      <Toolbar className="headercl">
        <div className="moviecl">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
              style: { backgroundColor: "#222", color: "white" },
            }}
          >
            <MenuItem onClick={handleClose}>Authentication</MenuItem>
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>Database</MenuItem>
            <MenuItem onClick={handleClose}>Storage</MenuItem>
            <MenuItem onClick={handleClose}>Hosting</MenuItem>
          </Menu>
          <Typography variant="h4">movie🎥List</Typography>
        </div>
        <div className={"switch"}>
          <CustomizedSwitches />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
