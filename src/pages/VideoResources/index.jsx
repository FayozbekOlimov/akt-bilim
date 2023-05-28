import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideos } from "../../redux/videosSlice";
import { Grid, Typography } from "@mui/material";
import { FAILED, LOADING } from "../../redux/actionTypes";
import { VideosSkeleton } from "../../components/Skeleton";
import VideoCard from "./VideoCard";
import { Navigate } from "react-router-dom";
import ErrorHandler from "../../components/ErrorHandler";

const VideoResources = () => {
  const dispatch = useDispatch();
  const { access } = useSelector((state) => state.login?.user);
  const { videos, status, error } = useSelector((state) => state.videos);

  useEffect(() => {
    dispatch(fetchVideos(access));
  }, [dispatch, access]);

  if (status === LOADING) {
    return <VideosSkeleton />;
  }

  if (status === FAILED) {
    return <ErrorHandler error={error} />;
  }

  if (videos.length === 0) {
    return (
      <Typography variant="subtitle1">
        Video qo'llanmalar mavjud emas
      </Typography>
    );
  }

  return (
    <Grid container spacing={2}>
      {videos &&
        videos.map((video) => (
          <Grid item xs={12} md={6} lg={4} key={video.id}>
            <VideoCard {...video} />
          </Grid>
        ))}
    </Grid>
  );
};

export default VideoResources;
