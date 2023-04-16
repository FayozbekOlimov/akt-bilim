import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
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
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { AppBar, Drawer, DrawerHeader } from "./utils";
import ModeButton from "../../components/ModeButton";

export default function Home() {
  const theme = useTheme();
  const [open, setOpen] = useState(
    window.matchMedia("(min-width: 768px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(min-width: 768px)")
      .addEventListener("change", (e) => setOpen(e.matches));
  }, []);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const navigate = useNavigate();

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
      text: "Testlar",
      to: "tests",
      icon: <QuizIcon />,
    },
  ];

  return (
    <Box display="flex">
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
            width={"100%"}
            display={"flex"}
            justifyContent={"flex-end"}
            alignItems={"center"}
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
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        {open && <Divider />}
        <Box
          display={open ? "flex" : "none"}
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection="column"
          width="100%"
          p={2}
        >
          <Avatar width={100} height={100} />
          <Typography
            variant="subtitle1"
            width={"100%"}
            textAlign={"center"}
            noWrap
            mt={2}
            mb={0.5}
          >
            Nurmuhammad
          </Typography>
          <Typography
            variant="body1"
            width={"100%"}
            textAlign={"center"}
            color={theme.palette.text.primary}
          >
            7-sinf
          </Typography>
        </Box>
        {open && <Divider />}
        <List>
          {listItems.map(({ text, to, icon }) => (
            <ListItem key={text} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
                onClick={() => navigate(to)}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {icon}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 1 }}
        bgcolor="background.paper"
      >
        <DrawerHeader />
        <Outlet />
      </Box>
    </Box>
  );
}
