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
import { useState } from "react";
import Timer from "../../components/Timer";
import {
  Option,
  Options,
  QueBox,
  QueNumber,
  QueWrapper,
  Wrapper,
} from "./styles";

const Questions = () => {
  const ques = [
    {
      id: 1,
      question: "What does HTML stand for?",
      answer: "Hyper Text Markup Language",
      options: [
        "Hyper Text Preprocessor",
        "Hyper Text Markup Language",
        "Hyper Text Multiple Language",
        "Hyper Tool Multi Language",
      ],
    },
    {
      id: 2,
      question: "What does CSS stand for?",
      answer: "Cascading Style Sheet",
      options: [
        "Common Style Sheet",
        "Colorful Style Sheet",
        "Computer Style Sheet",
        "Cascading Style Sheet",
      ],
    },
    {
      id: 3,
      question: "What does PHP stand for?",
      answer: "Hypertext Preprocessor",
      options: [
        "Hypertext Preprocessor",
        "Hypertext Programming",
        "Hypertext Preprogramming",
        "Hometext Preprocessor",
      ],
    },
    {
      id: 4,
      question: "What does SQL stand for?",
      answer: "Structured Query Language",
      options: [
        "Stylish Question Language",
        "Stylesheet Query Language",
        "Statement Question Language",
        "Structured Query Language",
      ],
    },
    {
      id: 5,
      question: "What does XML stand for?",
      answer: "eXtensible Markup Language",
      options: [
        "eXtensible Markup Language",
        "eXecutable Multiple Language",
        "eXTra Multi-Program Language",
        "eXamine Multiple Language",
      ],
    },
    {
      id: 6,
      question: "What does JSON stand for?",
      answer: "JavaScript Object Notation",
      options: [
        "JavaScript Object Nodes",
        "JavaScript Object Notation",
        "JavaScript Oriented Notation",
        "JavaScript Oriented Nodes",
      ],
    },
  ];

  const [quizIndex, setQuizIndex] = useState(0);
  const handleChange = (event, questionId) => {
    console.log(event.target.value, questionId);
  };

  const nextQuiz = () => {
    if (quizIndex < ques.length - 1) {
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

  const question = ques[quizIndex];

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} lg={8}>
        <Timer minutes={1} />
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
              {question.id} - SAVOL
            </Typography>
            <IconButton
              color="success"
              disabled={quizIndex === ques.length - 1}
              onClick={nextQuiz}
            >
              <East />
            </IconButton>
          </QueNumber>
          <Wrapper>
            <Typography variant="subtitle1">{question.question}</Typography>
          </Wrapper>
          <Wrapper>
            <FormControl sx={{ width: "100%" }}>
              <Options
                aria-labelledby="demo-radio-buttons-group-label"
                name="radio-buttons-group"
                onChange={(event) => handleChange(event, question.id)}
              >
                {question.options.map((opt, i) => (
                  <Option
                    // name={`question${i}`}
                    key={i}
                    value={String.fromCharCode(i + 97)}
                    control={<Radio />}
                    label={opt}
                  />
                ))}
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
            {/* <Timer minutes={61} /> */}
          </Box>
          <Divider sx={{ my: 0.5 }} />
          <QueWrapper>
            {ques.map((_, i) => (
              <QueBox
                key={i}
                // className={selectedQuestions.has(i) && "active"}
                onClick={() => setQuiz(i)}
              >
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
