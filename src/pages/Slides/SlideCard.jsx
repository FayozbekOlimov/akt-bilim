import {
  Button,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  useTheme,
} from "@mui/material";
import { Link } from "react-router-dom";
import { CardTitle, CardWrapper, CardSubtitle } from "./styles";

const SlideCard = ({ id, image, name, text, science }) => {
  const theme = useTheme();
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
        <Button
          size="small"
          color="success"
          sx={{ fontSize: theme.typography.fontSize }}
        >
          {science?.name}
        </Button>
      </CardActions>
    </CardWrapper>
  );
};

export default SlideCard;
