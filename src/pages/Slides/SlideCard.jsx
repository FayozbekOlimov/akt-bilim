import {
  Typography,
  Button,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
} from "@mui/material";
import { Link } from "react-router-dom";
import { CardTitle, CardWrapper, CardSubtitle } from "./styles";

const SlideCard = ({ id, image, name, text, science }) => {
  return (
    <CardWrapper>
      <CardActionArea component={Link} to={`${id}`}>
        <CardMedia
          component="img"
          height="180"
          image={image}
          alt="slide card img"
        />
        <CardContent>
          <CardTitle variant="subtitle1" gutterBottom>
            {name}
          </CardTitle>
          <CardSubtitle variant="body2" color="text.secondary">
            {text}
          </CardSubtitle>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ pt: 0 }}>
        <Button size="small" color="primary">
          {science?.name}
        </Button>
      </CardActions>
    </CardWrapper>
  );
};

export default SlideCard;
