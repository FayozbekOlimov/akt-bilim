import { East, West } from "@mui/icons-material";
import {
  Box,
  Button,
  Divider,
  FormControl,
  Grid,
  IconButton,
  Radio,
  Stack,
  Typography,
} from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import ErrorHandler from "../../components/ErrorHandler";
import Timer from "../../components/Timer";
import { timeToInt } from "../../helpers";
import { FAILED, LOADING } from "../../redux/actionTypes";
import { chooseOption } from "../../redux/optionSlice";
import { submitTest } from "../../redux/submitTestSlice";
import { fetchTestDataById } from "../../redux/testDataSlice";
import {
  Option,
  Options,
  QueBox,
  QueNumber,
  QueWrapper,
  Wrapper,
} from "./styles";

const Questions = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { access } = useSelector((state) => state.login?.user);
  const { testData, status, error } = useSelector((state) => state.testData);
  const [quizIndex, setQuizIndex] = useState(0);

  useEffect(() => {
    dispatch(fetchTestDataById({ accessToken: access, id }));
  }, [dispatch, access]);

  if (status === LOADING) {
    return "Yuklanmoqda...";
  }

  if (status === FAILED) {
    return <ErrorHandler error={error} />;
  }

  const nextQuiz = () => {
    if (quizIndex < testData?.questions.length - 1) {
      setQuizIndex(quizIndex + 1);
    }
  };

  const prevQuiz = () => {
    if (quizIndex > 0) {
      setQuizIndex(quizIndex - 1);
    }
  };

  const setQuiz = (id) => {
    setQuizIndex(id);
  };

  const question = testData?.questions && testData?.questions[quizIndex];

  const handleChange = (event) => {
    const [queId, option] = event.target.value.split("-");
    dispatch(chooseOption({ accessToken: access, queId, option }));
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} lg={8}>
        <Timer minutes={timeToInt(testData?.duration)} />
      </Grid>
      <Grid item xs={12} lg={8}>
        <Stack direction="column" spacing={2}>
          <QueNumber
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <IconButton
              color="success"
              disabled={quizIndex === 0}
              onClick={prevQuiz}
            >
              <West />
            </IconButton>
            <Typography
              variant="subtitle1"
              color="text.primary"
              fontWeight={700}
            >
              {quizIndex + 1} - SAVOL
            </Typography>
            <IconButton
              color="success"
              disabled={quizIndex === testData?.questions?.length - 1}
              onClick={nextQuiz}
            >
              <East />
            </IconButton>
          </QueNumber>
          <Wrapper>
            <Typography
              variant="subtitle1"
              dangerouslySetInnerHTML={{ __html: question?.question }}
            />
          </Wrapper>
          <Wrapper>
            <FormControl sx={{ width: "100%" }}>
              <Options
                aria-labelledby={`demo-radio-buttons-group-label-${question?.id}`}
                name={`radio-buttons-group-${question?.id}`}
                onChange={(event) => handleChange(event)}
              >
                <Option
                  value={`${question?.id}-1`}
                  control={<Radio />}
                  label={
                    <span
                      dangerouslySetInnerHTML={{ __html: question?.option1 }}
                    />
                  }
                />
                <Option
                  value={`${question?.id}-2`}
                  control={<Radio />}
                  label={
                    <span
                      dangerouslySetInnerHTML={{ __html: question?.option2 }}
                    />
                  }
                />
                <Option
                  value={`${question?.id}-3`}
                  control={<Radio />}
                  label={
                    <span
                      dangerouslySetInnerHTML={{ __html: question?.option3 }}
                    />
                  }
                />
                <Option
                  value={`${question?.id}-4`}
                  control={<Radio />}
                  label={
                    <span
                      dangerouslySetInnerHTML={{ __html: question?.option4 }}
                    />
                  }
                />
              </Options>
            </FormControl>
          </Wrapper>
        </Stack>
      </Grid>
      <Grid item xs={12} lg={4}>
        <Wrapper>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography
              variant="subtitle1"
              color="text.primary"
              fontWeight={700}
            >
              Savollar
            </Typography>
          </Box>
          <Divider sx={{ my: 0.5 }} />
          <QueWrapper>
            {testData?.questions?.map((_, i) => (
              <QueBox key={i} onClick={() => setQuiz(i)}>
                <Typography color="#000" fontWeight={500} variant="body1">
                  {i + 1}
                </Typography>
              </QueBox>
            ))}
          </QueWrapper>
          <Divider sx={{ my: 0.5 }} />
          <Button
            variant="contained"
            color="success"
            size="small"
            LinkComponent={Link}
            to={`/dashboard/tests/result/${testData?.id}`}
          >
            Testni yakunlash
          </Button>
        </Wrapper>
      </Grid>
    </Grid>
  );
};

export default Questions;
