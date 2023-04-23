import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Skeleton, Typography } from "@mui/material";
import { fetchSubjects } from "../../redux/subjectsSlice";
import SubjectCard from "./SubjectCard";

const Subjects = () => {
  const dispatch = useDispatch();
  const { subjects, status, error } = useSelector((state) => state.subjects);

  useEffect(() => {
    dispatch(fetchSubjects());
  }, [dispatch]);

  if (status === "loading") {
    return (
      <Grid container spacing={2}>
        {Array.from(new Array(3)).map((_, index) => (
          <Grid item xs={12} md={6} lg={4} key={index}>
            <Skeleton height={100} animation="wave" />
            <Skeleton height={25} animation="wave" sx={{ mt: -1 }} />
            <Skeleton height={25} animation="wave" sx={{ mt: -1 }} />
          </Grid>
        ))}
      </Grid>
    );
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
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
