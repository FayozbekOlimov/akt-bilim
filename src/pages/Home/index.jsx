import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import jwtDecode from "jwt-decode";
import { Outlet } from "react-router-dom";
import { List, Toolbar, Typography, IconButton, Divider } from "@mui/material";
import { Menu, ChevronLeft } from "@mui/icons-material";
import {
  AppBar,
  Drawer,
  DrawerHeader,
  HomeWrapper,
  Main,
  MuiIconButton,
  Navbar,
  UserGroup,
  UserName,
  UserWrapper,
} from "./styles";
import Avatar from "../../components/Avatar";
import ModeButton from "../../components/ModeButton";
import UpdateProfileButton from "../../components/UpdateProfileButton";
import TextToSpeechButton from "../../components/TextToSpeechButton";
import VisibilityButton from "../../components/VisibilityButton";
import NavLink from "./NavLink";
import { REFRESH_INTERVAL } from "../../constants";
import useMediaQuery from "../../hooks/useMediaQuery";
import useRefreshToken from "../../hooks/useRefreshToken";
import { fetchUser } from "../../redux/userSlice";
import { navLinks } from "./navLinks";
import VoiceButton from "../../components/VoiceButton";

export default function Home() {
  const dispatch = useDispatch();
  const [open, setOpen] = useMediaQuery("(min-width: 768px)");

  const { access } = useSelector((state) => state.login?.user);
  const { user } = useSelector((state) => state.user);
  const { student_id } = jwtDecode(access);

  useEffect(() => {
    dispatch(fetchUser({ accessToken: access, id: student_id }));
  }, [dispatch, access, student_id]);

  useRefreshToken(REFRESH_INTERVAL);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <HomeWrapper>
      <VoiceButton />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <MuiIconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerOpen}
            open={open}
            sx={{ mr: 0 }}
          >
            <Menu sx={{ fontSize: "24px" }} />
          </MuiIconButton>
          <Navbar>
            <VisibilityButton />
            <ModeButton />
            <TextToSpeechButton />
          </Navbar>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <Typography variant="h6" ml={1}>
            Student
          </Typography>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeft sx={{ fontSize: "24px" }} />
          </IconButton>
        </DrawerHeader>
        {open && <Divider />}
        <UserWrapper open={open}>
          <Avatar width={100} height={100} />
          <UserName variant="subtitle1" noWrap>
            {user?.user?.first_name}
          </UserName>
          <UserGroup variant="body1">{user?.group}</UserGroup>
        </UserWrapper>
        {open && <Divider />}
        <List sx={{ py: 0 }}>
          {navLinks.map((item) => (
            <NavLink key={item.text} {...item} open={open} />
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
