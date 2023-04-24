import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import {
  ListItemText,
  ListItemIcon,
  Box,
  List,
  Toolbar,
  ListItemButton,
  Typography,
  ListItem,
  IconButton,
  Divider,
} from "@mui/material";
import Avatar from "../../components/Avatar";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import ArticleIcon from "@mui/icons-material/Article";
import QuizIcon from "@mui/icons-material/Quiz";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { AppBar, Drawer, DrawerHeader, HomeWrapper, Main } from "./styles";
import ModeButton from "../../components/ModeButton";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { refreshUrl } from "../../api/urls";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/loginSlice";
import { BASE_API } from "../../api";

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
          console.log(error.message);
        });
    }, 60 * 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [tokens]);

  const [open, setOpen] = useState(
    window.matchMedia("(min-width: 768px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(min-width: 768px)")
      .addEventListener("change", (e) => setOpen(e.matches));
  }, [open]);

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

  const listItems = [
    {
      text: "Video qo'llanmalar",
      to: "",
      icon: <OndemandVideoIcon />,
    },
    {
      text: "Taqdimotlar",
      to: "presentations",
      icon: <ArticleIcon />,
    },
    {
      text: "Fanlar",
      to: "subjects",
      icon: <QuizIcon />,
    },
    {
      text: "Chiqish",
      to: "/login",
      icon: <LogoutOutlinedIcon />,
    },
  ];

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
          <Box
            width="100%"
            display="flex"
            justifyContent="flex-end"
            alignItems="center"
          >
            <ModeButton />
          </Box>
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
        <Box
          display={open ? "flex" : "none"}
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          width="100%"
          p={2}
        >
          <Avatar width={100} height={100} />
          <Typography
            variant="subtitle1"
            width="100%"
            textAlign="center"
            noWrap
            mt={2}
            mb={0.5}
          >
            Nurmuhammad
          </Typography>
          <Typography
            variant="body1"
            width="100%"
            textAlign="center"
            color="text.primary"
          >
            7-sinf
          </Typography>
        </Box>
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
