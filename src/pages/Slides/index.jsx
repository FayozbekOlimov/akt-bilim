import { Grid } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SlidesSkeleton } from "../../components/Skeleton";
import { FAILED, LOADING } from "../../redux/actionTypes";
import { fetchSlides } from "../../redux/slidesSlice";
import SlideCard from "./SlideCard";

const Slides = () => {
  const dispatch = useDispatch();
  const { slides, status, error } = useSelector((state) => state.slides);

  useEffect(() => {
    dispatch(fetchSlides());
  }, [dispatch]);

  if (status === LOADING) {
    return <SlidesSkeleton />;
  }

  if (status === FAILED) {
    return <div>{error}</div>;
  }

  return (
    <Grid container spacing={2}>
      {slides &&
        slides.map((slide) => (
          <Grid item xs={12} md={6} lg={4} key={slide.id}>
            <SlideCard {...slide} />
          </Grid>
        ))}
    </Grid>
  );
};

export default Slides;