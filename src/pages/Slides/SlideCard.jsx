import {
  Typography,
  Button,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
} from "@mui/material";
import { Link } from "react-router-dom";
import { CardWrapper, Text } from "./styles";

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
          <Typography variant="subtitle1" noWrap gutterBottom>
            {name}
          </Typography>
          <Text variant="body2" color="text.secondary">
            {text}
          </Text>
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
