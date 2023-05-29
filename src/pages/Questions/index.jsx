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
import { useParams } from "react-router-dom";
import ErrorHandler from "../../components/ErrorHandler";
import Timer from "../../components/Timer";
import { FAILED, LOADING } from "../../redux/actionTypes";
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

  // if (resource.length === 0) {
  //   return <Typography variant="subtitle1">Resurslar mavjud emas</Typography>;
  // }

  // const ques = [
  //   {
  //     id: 1,
  //     question: "What does HTML stand for?",
  //     answer: "Hyper Text Markup Language",
  //     options: [
  //       "Hyper Text Preprocessor",
  //       "Hyper Text Markup Language",
  //       "Hyper Text Multiple Language",
  //       "Hyper Tool Multi Language",
  //     ],
  //   },
  //   {
  //     id: 2,
  //     question: "What does CSS stand for?",
  //     answer: "Cascading Style Sheet",
  //     options: [
  //       "Common Style Sheet",
  //       "Colorful Style Sheet",
  //       "Computer Style Sheet",
  //       "Cascading Style Sheet",
  //     ],
  //   },
  //   {
  //     id: 3,
  //     question: "What does PHP stand for?",
  //     answer: "Hypertext Preprocessor",
  //     options: [
  //       "Hypertext Preprocessor",
  //       "Hypertext Programming",
  //       "Hypertext Preprogramming",
  //       "Hometext Preprocessor",
  //     ],
  //   },
  //   {
  //     id: 4,
  //     question: "What does SQL stand for?",
  //     answer: "Structured Query Language",
  //     options: [
  //       "Stylish Question Language",
  //       "Stylesheet Query Language",
  //       "Statement Question Language",
  //       "Structured Query Language",
  //     ],
  //   },
  //   {
  //     id: 5,
  //     question: "What does XML stand for?",
  //     answer: "eXtensible Markup Language",
  //     options: [
  //       "eXtensible Markup Language",
  //       "eXecutable Multiple Language",
  //       "eXTra Multi-Program Language",
  //       "eXamine Multiple Language",
  //     ],
  //   },
  //   {
  //     id: 6,
  //     question: "What does JSON stand for?",
  //     answer: "JavaScript Object Notation",
  //     options: [
  //       "JavaScript Object Nodes",
  //       "JavaScript Object Notation",
  //       "JavaScript Oriented Notation",
  //       "JavaScript Oriented Nodes",
  //     ],
  //   },
  // ];

  // const ques = testData?.questions;

  // const handleChange = (event, questionId) => {
  //   console.log(event.target.value, questionId);
  // };

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

  console.log("question", testData?.questions);

  // return "sasasas";

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} lg={8}>
        <Timer minutes={60} />
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
              {question?.id} - SAVOL
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
              // aria-labelledby={`demo-radio-buttons-group-label-${question?.id}`}
              // name={`radio-buttons-group-${question?.id}`}
              // onChange={(event) => handleChange(event, question.id)}
              >
                <Option
                  // name={`question`}
                  value={1}
                  control={<Radio />}
                  label={
                    <span
                      dangerouslySetInnerHTML={{ __html: question?.option1 }}
                    />
                  }
                />
                <Option
                  // name={`question`}
                  value={2}
                  control={<Radio />}
                  label={
                    <span
                      dangerouslySetInnerHTML={{ __html: question?.option2 }}
                    />
                  }
                />
                <Option
                  // name={`question`}
                  value={3}
                  control={<Radio />}
                  label={
                    <span
                      dangerouslySetInnerHTML={{ __html: question?.option3 }}
                    />
                  }
                />
                <Option
                  // name={`question`}
                  value={4}
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
            type="submit"
          >
            Testni yakunlash
          </Button>
        </Wrapper>
      </Grid>
    </Grid>
  );
};

export default Questions;
