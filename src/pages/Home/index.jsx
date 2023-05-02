import React, { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import {
  ListItemText,
  ListItemIcon,
  List,
  Toolbar,
  ListItemButton,
  Typography,
  ListItem,
  IconButton,
  Divider,
} from "@mui/material";
import Avatar from "../../components/Avatar";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {
  AppBar,
  Drawer,
  DrawerHeader,
  HomeWrapper,
  Main,
  Navbar,
  UserGroup,
  UserName,
  UserWrapper,
} from "./styles";
import ModeButton from "../../components/ModeButton";
import { refreshUrl } from "../../api/urls";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/loginSlice";
import { BASE_API } from "../../api";
import { listItems } from "./utils";
import useMediaQuery from "../../hooks/useMediaQuery";

export default function Home() {
  const [tokens, setTokens] = useState(
    JSON.parse(localStorage.getItem("tokens")) || null
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const intervalId = setInterval(() => {
      BASE_API.post(refreshUrl, {
        refresh: tokens?.refresh,
      })
        .then((response) => {
          setTokens(response.data);
          localStorage.setItem("tokens", JSON.stringify(response.data));
        })
        .catch((error) => {
          navigate("/login", { replace: true });
          // console.log(error.message);
        });
    }, 4 * 60 * 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [tokens]);

  const [open, setOpen] = useMediaQuery("(min-width: 768px)");

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleClick = (text, to) => {
    if (text === "Chiqish") {
      dispatch(logout());
    }
    navigate(to);
  };

  return (
    <HomeWrapper>
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              mr: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Navbar>
            <ModeButton />
            <IconButton
              color="inherit"
              LinkComponent={Link}
              to="/dashboard/profile"
            >
              <AccountCircleIcon />
            </IconButton>
          </Navbar>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <Typography variant="h6" ml={1}>
            Student
          </Typography>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </DrawerHeader>
        {open && <Divider />}
        <UserWrapper display={open ? "flex" : "none"}>
          <Avatar width={100} height={100} />
          <UserName variant="subtitle1" noWrap>
            Nurmuhammad
          </UserName>
          <UserGroup variant="body1">7-sinf</UserGroup>
        </UserWrapper>
        {open && <Divider />}
        <List sx={{ py: 0 }}>
          {listItems.map(({ text, to, icon }) => (
            <React.Fragment key={text}>
              {text === "Chiqish" && <Divider />}
              <ListItem disablePadding sx={{ display: "block", my: 0.5 }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                  onClick={() => handleClick(text, to)}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                      color: text === "Chiqish" ? "error.main" : "auto",
                    }}
                  >
                    {icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={text}
                    sx={{
                      opacity: open ? 1 : 0,
                      color: text === "Chiqish" ? "error.main" : "auto",
                    }}
                  />
                </ListItemButton>
              </ListItem>
            </React.Fragment>
          ))}
        </List>
      </Drawer>
      <Main>
        <DrawerHeader />
        <Outlet />
      </Main>
    </HomeWrapper>
  );
}
