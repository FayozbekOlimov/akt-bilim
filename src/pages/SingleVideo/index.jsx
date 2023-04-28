import { DateRange } from "@mui/icons-material";
import { Box, Divider, Grid, Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { IMAGE_URL } from "../../api/urls";
import { SingleVideoSkeleton } from "../../components/Skeleton";
import { dateFormat, videoLinkFormat } from "../../helpers";
import { FAILED, LOADING } from "../../redux/actionTypes";
import { fetchVideoById } from "../../redux/singleVideoSlice";
import { Iframe } from "./styles";

const SingleVideo = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { video, status, error } = useSelector((state) => state.video);

  useEffect(() => {
    dispatch(fetchVideoById(id));
  }, [dispatch]);

  if (status === LOADING) {
    return <SingleVideoSkeleton />;
  }

  if (status === FAILED) {
    return <div>{error}</div>;
  }

  return (
    <Grid container spacing={3}>
      <Grid item sm={12} lg={6}>
        <Iframe
          src={videoLinkFormat(video?.link)}
          poster={IMAGE_URL + video?.image}
          allowFullScreen
        />
      </Grid>
      <Grid item sm={12} lg={6}>
        <Typography variant="h5">{video?.science_name}</Typography>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6" color="text.secondary" flex={1}>
            {video?.name}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            component="div"
            display="flex"
            alignItems="center"
          >
            <DateRange sx={{ fontSize: "18px", mr: 0.5 }} />
            {dateFormat(video?.date)}
          </Typography>
        </Box>
        <Divider sx={{ my: 1 }} />
        <Typography variant="body1" color="text.primary">
          {video?.text}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default SingleVideo;
