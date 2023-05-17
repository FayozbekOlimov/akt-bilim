import {
  AppBar as MuiAppBar,
  Box,
  Drawer as MuiDrawer,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  styled,
  Typography,
} from "@mui/material";

const drawerWidth = 250;

export const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

export const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

export const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

export const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  backgroundColor: theme.palette.success.dark,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export const MuiIconButton = styled(IconButton)(({ theme, open }) => ({
  display: open && "none",
  color: "inherit",
  marginRight: theme.spacing(5),
  [theme.breakpoints.down("sm")]: {
    marginLeft: "-8px",
  },
}));

export const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export const Main = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(2),
  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(3),
  },
  height: "100vh",
  backgroundColor: theme.palette.background.default,
}));

export const HomeWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  "& .MuiDrawer-paper": {
    backgroundColor: theme.palette.background.sidebar,
  },
}));

export const Navbar = styled(Box)({
  width: "100%",
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
});

export const UserWrapper = styled(Box)(({ theme, open }) => ({
  display: open ? "flex" : "none",
  justifyContent: "flex-end",
  alignItems: "center",
  flexDirection: "column",
  width: "100%",
  padding: theme.spacing(2),
}));

export const UserName = styled(Typography)(({ theme }) => ({
  width: "100%",
  textAlign: "center",
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(0.5),
}));

export const UserGroup = styled(Typography)(({ theme }) => ({
  width: "100%",
  textAlign: "center",
  color: theme.palette.text.primary,
}));

export const MuiListItem = styled(ListItem)(({ theme }) => ({
  display: "block",
  margin: `${theme.spacing(0.5)} 0`,
}));

export const MuiListItemButton = styled(ListItemButton, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  minHeight: "48px",
  justifyContent: open ? "initial" : "center",
  padding: `0 ${theme.spacing(2.5)}`,
}));

export const MuiListItemIcon = styled(ListItemIcon)(({ theme, open }) => ({
  minWidth: 0,
  marginRight: open ? theme.spacing(2) : "auto",
  justifyContent: "center",
}));
