import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Grid, AppBar, Toolbar, Typography } from "@mui/material";
import MovieCard from "./components/MovieCard";

function App() {
   const [movies, setMovies] = useState([]);

   useEffect(() => {
      axios
         .get("https://www.freetestapi.com/api/v1/movies")
         .then((response) => {
            setMovies(response.data);
         })
         .catch((error) => {
            console.error("Error fetching movies:", error);
         });
   }, []);

   return (
      <div>
         <AppBar position="static">
            <Toolbar>
               <Typography variant="h6">Movie Database</Typography>
            </Toolbar>
         </AppBar>
         <Container style={{ marginTop: "2rem" }}>
            <Grid container spacing={4}>
               {movies.map((movie) => (
                  <Grid item xs={12} sm={6} md={4} key={movie.id}>
                     <MovieCard movie={movie} />
                  </Grid>
               ))}
            </Grid>
         </Container>
      </div>
   );
}

export default App;
