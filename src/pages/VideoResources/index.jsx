import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideos } from "../../redux/videosSlice";
import { Grid } from "@mui/material";
import VideoCard from "./VideoCard";

const VideoResources = () => {
  const dispatch = useDispatch();
  const { videos, status, error } = useSelector((state) => state.videos);

  useEffect(() => {
    dispatch(fetchVideos());
  }, []);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>{error}</div>;
  }

  return (
    <Grid container spacing={2}>
      {videos.map((video) => (
        <Grid item xs={12} md={6} lg={4} key={video.id}>
          <VideoCard {...video} />
        </Grid>
      ))}
    </Grid>
  );
};

export default VideoResources;
