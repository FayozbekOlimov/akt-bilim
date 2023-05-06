import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideos } from "../../redux/videosSlice";
import { Grid } from "@mui/material";
import { FAILED, LOADING } from "../../redux/actionTypes";
import { VideosSkeleton } from "../../components/Skeleton";
import VideoCard from "./VideoCard";

const VideoResources = () => {
  const dispatch = useDispatch();
  const { access } = useSelector((state) => state.login?.user);
  const { videos, status, error } = useSelector((state) => state.videos);

  useEffect(() => {
    dispatch(fetchVideos(access));
  }, [dispatch]);

  if (status === LOADING) {
    return <VideosSkeleton />;
  }

  if (status === FAILED) {
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
