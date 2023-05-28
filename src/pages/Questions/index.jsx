import { East, West } from "@mui/icons-material";
import {
  Box,
  Divider,
  FormControl,
  Grid,
  IconButton,
  Radio,
  Stack,
  Typography,
} from "@mui/material";
import {
  Option,
  Options,
  QueBox,
  QueNumber,
  QueWrapper,
  Wrapper,
} from "./styles";

const Questions = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} lg={8}>
        <Stack direction="column" spacing={2}>
          <QueNumber
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <IconButton color="success" disabled>
              <West />
            </IconButton>
            <Typography
              variant="subtitle1"
              color="text.primary"
              fontWeight={700}
            >
              1 - SAVOL
            </Typography>
            <IconButton color="success">
              <East />
            </IconButton>
          </QueNumber>
          <Wrapper>
            <Typography variant="subtitle1">
              _____ is a way which adds multiple elements to a React Component
              without wrapping them in an extra DOM node.
            </Typography>
          </Wrapper>
          <Wrapper>
            <FormControl sx={{ width: "100%" }}>
              <Options
                aria-labelledby="demo-radio-buttons-group-label"
                name="radio-buttons-group"
              >
                <Option
                  value="a"
                  control={<Radio />}
                  label="<React.Fragment> </React.Fragment>"
                />
                <Option value="b" control={<Radio />} label="<> </>" />
                <Option value="c" control={<Radio />} label="Both a & b" />
                <Option value="d" control={<Radio />} label="<div> </div>" />
              </Options>
            </FormControl>
          </Wrapper>
        </Stack>
      </Grid>
      <Grid item xs={12} lg={4}>
        <Wrapper>
          <Typography variant="subtitle1" color="text.primary" fontWeight={700}>
            Savollar
          </Typography>
          <Divider sx={{ my: 0.5 }} />
          <QueWrapper>
            {Array.from(Array(25)).map((_, i) => (
              <QueBox key={i} className={i < 10 && "active"}>
                <Typography color="#000" fontWeight={500} variant="body1">
                  {i + 1}
                </Typography>
              </QueBox>
            ))}
          </QueWrapper>
        </Wrapper>
      </Grid>
    </Grid>
  );
};

export default Questions;
