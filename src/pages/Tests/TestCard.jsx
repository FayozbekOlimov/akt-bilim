import {
  Box,
  Button,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { dateFormat, formatTime } from "../../helpers";
import { CardWrapper } from "./styles";

const TestCard = ({ name, end, number, duration, possibilities, required }) => {
  return (
    <CardWrapper>
      <CardHeader sx={{ py: 1.5 }} title={name} />
      <Divider />
      <CardContent sx={{ py: 1.5 }}>
        <Typography variant="body1" color="text.secondary">
          Muddat: <b>{dateFormat(end)} gacha</b>
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Savollar soni: <b>{number} ta</b>
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Ajratilgan vaqt: <b>{formatTime(duration)}</b>
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Urinishlar soni: <b>{possibilities} marta</b>
        </Typography>
      </CardContent>
      <Divider />
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
