import {
  CardContentWrapper,
  CardTitle,
  CardWrapper,
  StyledChip,
} from "./styles";
import { Divider, ListItemText, MenuItem, MenuList } from "@mui/material";
import { Link } from "react-router-dom";

const SubjectCard = ({ id, name, tests_count, recourse_count }) => {
  return (
    <CardWrapper>
      <CardTitle title={name} component="h5" />
      <Divider />
      <CardContentWrapper>
        <MenuList disablePadding>
          <MenuItem component={Link} to={`/dashboard/resources/${id}`}>
            <ListItemText>Resurslar soni</ListItemText>
            <StyledChip
              label={recourse_count}
              variant="filled"
              size="small"
              color="success"
            />
          </MenuItem>
          <MenuItem component={Link} to={`/dashboard/tests/${id}`}>
            <ListItemText>Testlar soni</ListItemText>
            <StyledChip
              label={tests_count}
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
