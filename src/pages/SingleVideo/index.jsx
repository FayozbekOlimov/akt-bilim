import { Divider, Grid, Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { IMAGE_URL } from "../../api/urls";
import ErrorHandler from "../../components/ErrorHandler";
import { SingleVideoSkeleton } from "../../components/Skeleton";
import { dateFormat, videoLinkFormat } from "../../helpers";
import { FAILED, LOADING } from "../../redux/actionTypes";
import { fetchVideoById } from "../../redux/singleVideoSlice";
import {
  DateIcon,
  Iframe,
  VideoDateBox,
  VideoHeader,
  VideoText,
  VideoTheme,
} from "./styles";

const SingleVideo = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { access } = useSelector((state) => state.login?.user);
  const { video, status, error } = useSelector((state) => state.video);

  useEffect(() => {
    dispatch(fetchVideoById({ accessToken: access, id }));
  }, [dispatch, access]);

  if (status === LOADING) {
    return <SingleVideoSkeleton />;
  }

  if (status === FAILED) {
    return <ErrorHandler error={error} />;
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
        <VideoHeader>
          <VideoTheme variant="h6">{video?.name}</VideoTheme>
          <VideoDateBox variant="body2">
            <DateIcon />
            {dateFormat(video?.date)}
          </VideoDateBox>
        </VideoHeader>
        <Divider sx={{ my: 1 }} />
        <VideoText
          variant="body1"
          dangerouslySetInnerHTML={{ __html: video?.text }}
        />
      </Grid>
    </Grid>
  );
};

export default SingleVideo;
