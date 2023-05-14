import {
  CardActionArea,
  CardContent,
  CardMedia,
  Chip,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { IMAGE_URL } from "../../api/urls";
import { dateFormat } from "../../helpers";
import {
  CardSubtitle,
  CardWrapper,
  ChipWrapper,
  PlayArrowIcon,
} from "./styles";

const VideoCard = ({ id, image, name, date, science_name }) => {
  return (
    <CardWrapper component={Link} to={`videos/${id}`}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="180"
          image={IMAGE_URL + image}
          alt={name}
        />
        <ChipWrapper>
          <Chip size="small" label={dateFormat(date)} color="success" />
        </ChipWrapper>
        <PlayArrowIcon />
        <CardContent p={2}>
          <Typography variant="subtitle1" noWrap gutterBottom>
            {science_name}
          </Typography>
          <CardSubtitle variant="body2">{name}</CardSubtitle>
        </CardContent>
      </CardActionArea>
    </CardWrapper>
  );
};

export default VideoCard;
