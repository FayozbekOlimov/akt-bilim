import {
  CardContentWrapper,
  CardTitle,
  CardWrapper,
  StyledChip,
} from "./styles";
import { Divider, ListItemText, MenuItem, MenuList } from "@mui/material";
import { Link } from "react-router-dom";

const SubjectCard = ({ name }) => {
  return (
    <CardWrapper>
      <CardTitle title={name} component="h5" />
      <Divider />
      <CardContentWrapper>
        <MenuList disablePadding>
          <MenuItem component={Link} to="/dashboard/resources">
            <ListItemText>Resurslar soni</ListItemText>
            <StyledChip
              label="10"
              variant="filled"
              size="small"
              color="success"
            />
          </MenuItem>
          <MenuItem component={Link} to="/dashboard/resources">
            <ListItemText>Testlar soni</ListItemText>
            <StyledChip
              label="5"
              color="success"
              variant="filled"
              size="small"
            />
          </MenuItem>
        </MenuList>
      </CardContentWrapper>
    </CardWrapper>
  );
};

export default SubjectCard;
