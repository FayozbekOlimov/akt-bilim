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
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import ErrorHandler from "../../components/ErrorHandler";
import Timer from "../../components/Timer";
import { timeToInt } from "../../helpers";
import { FAILED, LOADING } from "../../redux/actionTypes";
import { chooseOption } from "../../redux/optionSlice";
import { fetchStartedTestDataById } from "../../redux/startedTestDataSlice";
import {
  Option,
  Options,
  QueBox,
  QueNumber,
  QueWrapper,
  Wrapper,
} from "../Questions/styles";

const StartedQuestions = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { access } = useSelector((state) => state.login?.user);
  const { startedTestData, status, error } = useSelector(
    (state) => state.startedTestData
  );
  const [quizIndex, setQuizIndex] = useState(0);

  useEffect(() => {
    dispatch(fetchStartedTestDataById({ accessToken: access, id }));
  }, [dispatch, access]);

  if (status === LOADING) {
    return "Yuklanmoqda...";
  }

  if (status === FAILED) {
    return <ErrorHandler error={error} />;
  }

  const nextQuiz = () => {
    if (quizIndex < startedTestData?.questions.length - 1) {
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

  const question =
    startedTestData?.questions && startedTestData?.questions[quizIndex];

  const handleChange = (event) => {
    const [queId, option] = event.target.value.split("-");
    dispatch(chooseOption({ accessToken: access, queId, option }));
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} lg={8}>
        <Timer minutes={timeToInt(startedTestData?.duration)} />
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
              disabled={quizIndex === startedTestData?.questions?.length - 1}
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
                onChange={handleChange}
              >
                <Option
                  value={`${question?.id}-1`}
                  control={<Radio />}
                  label={
                    <span
                      dangerouslySetInnerHTML={{ __html: question?.option1 }}
                    />
                  }
                  checked={question?.choosen === 1}
                />
                <Option
                  value={`${question?.id}-2`}
                  control={<Radio />}
                  label={
                    <span
                      dangerouslySetInnerHTML={{ __html: question?.option2 }}
                    />
                  }
                  checked={question?.choosen === 2}
                />
                <Option
                  value={`${question?.id}-3`}
                  control={<Radio />}
                  label={
                    <span
                      dangerouslySetInnerHTML={{ __html: question?.option3 }}
                    />
                  }
                  checked={question?.choosen === 3}
                />
                <Option
                  value={`${question?.id}-4`}
                  control={<Radio />}
                  label={
                    <span
                      dangerouslySetInnerHTML={{ __html: question?.option4 }}
                    />
                  }
                  checked={question?.choosen === 4}
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
            {startedTestData?.questions?.map((_, i) => (
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
            to={`/dashboard/tests/result/${id}`}
          >
            Testni yakunlash
          </Button>
        </Wrapper>
      </Grid>
    </Grid>
  );
};

export default StartedQuestions;
