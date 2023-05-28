import {
  CardContentWrapper,
  CardTitle,
  CardWrapper,
  StyledChip,
} from "./styles";
import {
  Divider,
  ListItemText,
  MenuItem,
  MenuList,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const SubjectCard = ({ id, name, tests_count, recourse_count }) => {
  return (
    <CardWrapper>
      <CardTitle title={name} component="h5" />
      <Divider />
      <CardContentWrapper>
        <MenuList disablePadding>
          <MenuItem component={Link} to={`/dashboard/resources/${id}`}>
            <ListItemText sx={{ userSelect: "text" }}>
              Resurslar soni
            </ListItemText>
            <StyledChip
              label={<Typography variant="body2">{recourse_count}</Typography>}
              variant="filled"
              size="small"
              color="primary"
            />
          </MenuItem>
          <MenuItem component={Link} to={`/dashboard/tests/${name}`}>
            <ListItemText sx={{ userSelect: "text" }}>
              Testlar soni
            </ListItemText>
            <StyledChip
              label={<Typography variant="body2">{tests_count}</Typography>}
              color="primary"
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
