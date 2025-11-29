import React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuOpenTwoToneIcon from "@mui/icons-material/MenuOpenTwoTone";
import Tooltip from "@mui/material/Tooltip";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import ConfirmationNumberRoundedIcon from "@mui/icons-material/ConfirmationNumberRounded";

import { NavLink, Link } from "react-router-dom";
import { logout } from "../../store/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
export default function NavigateMenu() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const userLogin = useSelector((state) => state.auth.user);
  console.log("userLogin: ", userLogin);
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate("/account/login");
  };
  return (
    <>
      <Box className="flex justify-around items-center gap-8  p-1 z-999 fixed w-full">
        <div className="flex justify-center items-center gap-1">
          <img className="w-10 h-10" src="movie.png" alt="" />
          <p className="font-medium text-white">MOVIE</p>
        </div>
        <div className="hidden md:flex lg:flex justify-center items-center gap-8">
          <NavLink to="/" className="flex flex-col items-center gap-1">
            <p className="text-white">HOME</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-white hidden" />
          </NavLink>
          <NavLink to="about" className="flex flex-col items-center gap-1">
            <p className="text-white">ABOUT</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-white hidden" />
          </NavLink>
          <NavLink to="movie" className="flex flex-col items-center gap-1">
            <p className="text-white">MOVIES</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-white hidden" />
          </NavLink>
          <NavLink to="contact" className="flex flex-col items-center gap-1">
            <p className="text-white">CONTACT</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-white hidden" />
          </NavLink>
        </div>
        <div className="flex justify-center items-center gap-2">
          {userLogin ? (
            <Tooltip title="Account settings">
              <IconButton
                onClick={handleClick}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={open ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
              >
                <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
              </IconButton>
            </Tooltip>
          ) : (
            <>
              <NavLink
                to="account/login"
                className="flex flex-col items-center gap-1"
              >
                <p className="text-white bg-[#2e7d32] py-1 px-3 rounded-2xl">
                  Login
                </p>
              </NavLink>

              <NavLink
                to="account/register"
                className="flex flex-col items-center gap-1"
              >
                <p className="text-white bg-[#2e7d32] py-1 px-3 rounded-2xl">
                  Register
                </p>
              </NavLink>
            </>
          )}

          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            slotProps={{
              paper: {
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 1.5,
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  "&::before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                  },
                },
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <MenuItem onClick={handleClose}>
              <div className="bg-gray-300 rounded-full p-1 mr-1">
                <ConfirmationNumberRoundedIcon />
              </div>
              My bookings
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Avatar /> My account
            </MenuItem>
            <Divider />

            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <Settings fontSize="small" />
              </ListItemIcon>
              Settings
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleLogout();
                handleClose();
              }}
            >
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Logout
            </MenuItem>
          </Menu>
          <div className="rounded-full lg:hidden ">
            <MenuOpenTwoToneIcon
              onClick={() => setVisible(!visible)}
              className="text-white cursor-pointer "
              fontSize="large"
            />
          </div>
        </div>
      </Box>
      {visible && (
        <div className="relative z-100">
          <div className="absolute w-full bg-gray-800/50 flex flex-col gap-2 shadow-lg mt-15">
            <Link
              to="/"
              onClick={() => setVisible(false)}
              className="flex flex-col items-center gap-1 hover:bg-gray-700"
            >
              <p className="text-white">HOME</p>
            </Link>
            <Link
              to="about"
              onClick={() => setVisible(false)}
              className="flex flex-col items-center gap-1 hover:bg-gray-700"
            >
              <p className="text-white">ABOUT</p>
            </Link>
            <Link
              to="movie"
              onClick={() => setVisible(false)}
              className="flex flex-col items-center gap-1 hover:bg-gray-700"
            >
              <p className="text-white">MOVIES</p>
            </Link>
            <Link
              to="contact"
              onClick={() => setVisible(false)}
              className="flex flex-col items-center gap-1 hover:bg-gray-700"
            >
              <p className="text-white">CONTACT</p>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
