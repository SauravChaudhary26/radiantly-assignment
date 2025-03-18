import React from "react";
import {
   Card,
   CardMedia,
   CardContent,
   Typography,
   CardActions,
   Button,
} from "@mui/material";

const MovieCard = ({ movie }) => {
   return (
      <Card sx={{ maxWidth: 345 }}>
         <CardMedia
            component="img"
            height="310"
            image={movie.poster}
            alt={movie.title}
         />
         <CardContent>
            <Typography gutterBottom variant="h5" component="div">
               {movie.title} ({movie.year})
            </Typography>
            <Typography variant="body2" color="text.secondary">
               {movie.plot.substring(0, 100)}...
            </Typography>
            <Typography
               variant="subtitle2"
               color="text.secondary"
               sx={{ marginTop: 1 }}
            >
               Genre: {movie.genre.join(", ")}
            </Typography>
            <Typography variant="subtitle2" color="text.secondary">
               Rating: {movie.rating}
            </Typography>
         </CardContent>
         <CardActions>
            <Button size="small" href={movie.website} target="_blank">
               Learn More
            </Button>
            <Button size="small" href={movie.trailer} target="_blank">
               Watch Trailer
            </Button>
         </CardActions>
      </Card>
   );
};

export default MovieCard;
