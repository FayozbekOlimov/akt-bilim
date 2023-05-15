import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { NotFoundNumber, NotFoundWrapper } from "./style";

const NotFound = () => {
  return (
    <NotFoundWrapper>
      <Typography variant="subtitle1">Bunday sahifa topilmadi</Typography>
      <NotFoundNumber>404</NotFoundNumber>
      <Button
        color="secondary"
        variant="text"
        LinkComponent={Link}
        to="/dashboard"
      >
        Asosiy sahifaga qaytish
      </Button>
    </NotFoundWrapper>
  );
};

export default NotFound;
