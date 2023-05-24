import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Typography } from "@mui/material";
import { fetchSubjects } from "../../redux/subjectsSlice";
import { FAILED, LOADING } from "../../redux/actionTypes";
import { SubjectsSkeleton } from "../../components/Skeleton";
import SubjectCard from "./SubjectCard";

const Subjects = () => {
  const dispatch = useDispatch();
  const { access } = useSelector((state) => state.login?.user);
  const { subjects, status, error } = useSelector((state) => state.subjects);

  useEffect(() => {
    dispatch(fetchSubjects(access));
  }, [dispatch, access]);

  if (status === LOADING) {
    return <SubjectsSkeleton />;
  }

  if (status === FAILED) {
    // return (
    //   <Typography variant="subtitle1" color="error">
    //     {error}
    //   </Typography>
    // );
    return <Navigate to="/login" replace />;
  }

  if (subjects.length === 0) {
    return <Typography variant="subtitle1">Fanlar mavjud emas</Typography>;
  }

  return (
    <Grid container spacing={2}>
      {subjects &&
        subjects.map((subject) => (
          <Grid item xs={12} md={6} lg={4} key={subject.id}>
            <SubjectCard {...subject} />
          </Grid>
        ))}
    </Grid>
  );
};

export default Subjects;
