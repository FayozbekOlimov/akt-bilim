import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideos } from "../../redux/videosSlice";
import { Grid, Skeleton, Typography } from "@mui/material";
import VideoCard from "./VideoCard";

const VideoResources = () => {
  const dispatch = useDispatch();
  const { videos, status, error } = useSelector((state) => state.videos);

  useEffect(() => {
    dispatch(fetchVideos());
  }, [dispatch]);

  if (status === "loading") {
    return (
      <Grid container spacing={2}>
        {Array.from(new Array(3)).map((_, index) => (
          <Grid item xs={12} md={6} lg={4} key={index}>
            <Skeleton animation="wave" variant="rounded" height={180} />
            <Skeleton height={30} width="60%" animation="wave" />
            <Skeleton height={25} animation="wave" sx={{ mt: -0.5 }} />
          </Grid>
        ))}
      </Grid>
    );
  }

  if (status === "failed") {
    // return <Navigate to={'/login'} replace />
    return <div>{error}</div>;
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
