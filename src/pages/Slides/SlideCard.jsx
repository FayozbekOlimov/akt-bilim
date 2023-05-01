import {
  Typography,
  Button,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
} from "@mui/material";
import { Link } from "react-router-dom";
import { CardWrapper } from "./styles";

const SlideCard = () => {
  return (
    <CardWrapper>
      <CardActionArea LinkComponent={Link} to="1">
        <CardMedia
          component="img"
          image="/images/subject.jpg"
          alt="slide"
          sx={{
            objectFit: "cover",
            width: "100%",
            height: 180,
          }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary" noWrap>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Matematika
        </Button>
      </CardActions>
    </CardWrapper>
  );
};

export default SlideCard;
