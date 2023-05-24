import { Box, Divider, Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { SingleSlideSkeleton } from "../../components/Skeleton";
import { dateFormat } from "../../helpers";
import { FAILED, LOADING } from "../../redux/actionTypes";
import { fetchSlideById } from "../../redux/singleSlideSlice";
import {
  DateIcon,
  ImgBox,
  SlideDateBox,
  SlideHeader,
  SlideTheme,
} from "./styles";

const SingleSlide = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { access } = useSelector((state) => state.login?.user);
  const { slide, status, error } = useSelector((state) => state.slide);

  useEffect(() => {
    dispatch(fetchSlideById({ accessToken: access, id }));
  }, [dispatch, access]);

  if (status === LOADING) {
    return <SingleSlideSkeleton />;
  }

  if (status === FAILED) {
    // return (
    //   <Typography variant="subtitle1" color="error">
    //     {error}
    //   </Typography>
    // );
    return <Navigate to="/login" replace />;
  }

  return (
    <Box>
      <SlideHeader>
        <SlideTheme variant="h6">{slide?.name}</SlideTheme>
        <SlideDateBox variant="body2">
          <DateIcon />
          {dateFormat(slide?.date)}
        </SlideDateBox>
      </SlideHeader>
      <Divider sx={{ my: 1 }} />
      <Box>
        <ImgBox>
          <img src={slide?.image} alt="slide img" />
        </ImgBox>
        {slide?.text}
      </Box>
    </Box>
  );
};

export default SingleSlide;
