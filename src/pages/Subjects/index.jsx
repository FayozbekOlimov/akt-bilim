import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid } from "@mui/material";
import { fetchSubjects } from "../../redux/subjectsSlice";
import { FAILED, LOADING } from "../../redux/actionTypes";
import { SubjectsSkeleton, VideosSkeleton } from "../../components/Skeleton";
import SubjectCard from "./SubjectCard";

const Subjects = () => {
  const dispatch = useDispatch();
  const { subjects, status, error } = useSelector((state) => state.subjects);

  useEffect(() => {
    dispatch(fetchSubjects());
  }, [dispatch]);

  if (status === LOADING) {
    return <SubjectsSkeleton />;
  }

  if (status === FAILED) {
    return <div>{error}</div>;
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
