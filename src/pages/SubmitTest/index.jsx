import { Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ErrorHandler from "../../components/ErrorHandler";
import { FAILED, LOADING } from "../../redux/actionTypes";
import { submitTest } from "../../redux/submitTestSlice";
import { Wrapper } from "../Questions/styles";

const SubmitTest = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { access } = useSelector((state) => state.login?.user);
  const { submit, status, error } = useSelector((state) => state.submitTest);

  useEffect(() => {
    dispatch(submitTest({ accessToken: access, resultId: id }));
  }, [dispatch, access]);

  if (status === LOADING) {
    return "Yuklanmoqda...";
  }

  if (status === FAILED) {
    return <ErrorHandler error={error} />;
  }

  return (
    <Wrapper>
      <Typography variant="subtitle1">
        Jami testlar: <b>{submit?.result?.split(" / ")[1]} ta</b>
      </Typography>
      <Typography variant="subtitle1">
        To'g'ri javoblar soni: <b>{submit?.result?.split(" / ")[0]} ta</b>
      </Typography>
    </Wrapper>
  );
};

export default SubmitTest;
