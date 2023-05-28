import {
  Box,
  Button,
  CardActions,
  CardContent,
  CardHeader,
  Chip,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { CardWrapper } from "./styles";

const TestCard = () => {
  return (
    <CardWrapper>
      <CardHeader
        title="Arifmetikaga oid test"
        subheader={
          <Chip
            label="30.05.2023"
            size="small"
            color="primary"
            variant="contained"
          />
        }
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Savollar soni: <b>20 ta</b>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Ajratilgan vaqt: <b>20 daqiqa</b>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Urinishlar soni: <b>3 marta</b>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Box width="100%" display="flex" justifyContent="flex-end" gap={1}>
          <Button color="success" variant="contained" disabled size="small">
            Natijalar
          </Button>
          <Button
            color="success"
            variant="contained"
            size="small"
            LinkComponent={Link}
            to="1"
          >
            Testni boshlash
          </Button>
        </Box>
      </CardActions>
    </CardWrapper>
  );
};

export default TestCard;
