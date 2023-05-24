import { Fragment } from "react";
import { MuiListItem, MuiListItemButton, MuiListItemIcon } from "./styles";
import { Divider, ListItemText } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/loginSlice";

const NavLink = ({ text, to, icon, open }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = (text, to) => {
    if (text === "Chiqish") {
      dispatch(logout());
    }
    navigate(to);
  };

  return (
    <Fragment key={text}>
      {text === "Mening profilim" && <Divider />}
      <MuiListItem disablePadding>
        <MuiListItemButton
          onClick={() => handleClick(text, to)}
          sx={{ userSelect: "text" }}
        >
          <MuiListItemIcon open={open}>{icon}</MuiListItemIcon>
          <ListItemText
            primary={text}
            sx={{
              opacity: open ? 1 : 0,
              color: text === "Chiqish" ? "error.main" : "auto",
            }}
          />
        </MuiListItemButton>
      </MuiListItem>
    </Fragment>
  );
};

export default NavLink;
