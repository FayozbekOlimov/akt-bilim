import { Warning } from "@mui/icons-material";
import {
  Button,
  CardActions,
  CardContent,
  CardHeader,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  Typography,
} from "@mui/material";
import { useCallback, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { dateFormat, formatTime } from "../../helpers";
import { fetchTestDetailById } from "../../redux/testDetailSlice";
import { CardWrapper } from "./styles";

const TestCard = ({
  id,
  name,
  end,
  number,
  duration,
  possibilities,
  required,
}) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleOpen = useMemo(() => () => setOpen(true), []);
  const handleClose = useMemo(() => () => setOpen(false), []);

  const dispatch = useDispatch();
  const { access } = useSelector((state) => state.login?.user);
  const { testDetail, status, error } = useSelector(
    (state) => state.testDetail
  );

  const handleClick = useCallback(async () => {
    handleOpen();
    setLoading(true);
    try {
      await dispatch(fetchTestDetailById({ accessToken: access, id }));
    } catch (error) {
      throw new Error(error.message);
    } finally {
      setLoading(false);
    }
  }, [dispatch, access, id]);

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
        <Button
          color="success"
          variant="contained"
          size="small"
          fullWidth
          onClick={handleClick}
        >
          Ko'rish
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle
            id="responsive-dialog-title"
            sx={{ display: "flex", alignItems: "center", gap: 1, p: 2 }}
          >
            <Warning sx={{ fontSize: "24px", color: "warning.main" }} /> {name}
          </DialogTitle>
          <Divider />
          <DialogContent sx={{ px: 2.5, py: 2 }}>
            <DialogContentText color="text.primary">
              {loading
                ? "Yuklanmoqda..."
                : testDetail?.additional_data &&
                  testDetail?.additional_data?.started_test_id
                ? "Sizda hali yakunlanmagan test bor! Uni davom ettirasizmi?"
                : testDetail?.additional_data?.overall_started_number ===
                  testDetail?.test?.possibilities
                ? "Sizda urinishlar soni tugagan. Uni qayta ishlay olmaysiz!"
                : `Sizning ${
                    testDetail?.test?.possibilities -
                    testDetail?.additional_data?.overall_started_number
                  } ta urinishingiz mavjud.`}
            </DialogContentText>
          </DialogContent>
          <DialogActions sx={{ pt: 0 }}>
            <Button onClick={handleClose}>Yopish</Button>
            {testDetail?.additional_data &&
            testDetail?.additional_data?.started_test_id ? (
              <Button
                LinkComponent={Link}
                to={`/dashboard/tests/started/${testDetail?.additional_data?.started_test_id}`}
              >
                Davom ettirish
              </Button>
            ) : testDetail?.test?.possibilities >
              testDetail?.additional_data?.overall_started_number ? (
              <Button LinkComponent={Link} to={`${id}/`}>
                Testni boshlash
              </Button>
            ) : null}
          </DialogActions>
        </Dialog>
      </CardActions>
    </CardWrapper>
  );
};

export default TestCard;
