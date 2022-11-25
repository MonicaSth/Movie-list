import React, { Component } from "react";
import "./App.css";
import Header from "./shared/Header";
import SearchBox from "./search/SearchBox";
import SavedMovies from "./savedmovies/SavedMovies";
import { Typography } from "@material-ui/core";
import Link from "@mui/material/Link";

class App extends Component {
  constructor(props) {
    super(props);
    const movies = JSON.parse(window.localStorage.getItem("saved-movies"));
    if (movies && Array.isArray(movies)) {
      this.state = {
        movies,
      };
    } else {
      this.state = {
        movies: [],
      };
    }
  }

  handleAddMovie = (movie) => {
    const movies = this.state.movies;
    this.setState(
      {
        movies: [...movies, movie],
      },
      () => {
        window.localStorage.setItem(
          "saved-movies",
          JSON.stringify(this.state.movies)
        );
      }
    );
  };

  handleDeleteMovie = (movieId) => {
    console.log("deleting ", movieId);

    this.setState(
      {
        movies: this.state.movies.filter((item) => item.id !== movieId),
      },
      () => {
        window.localStorage.setItem(
          "saved-movies",
          JSON.stringify(this.state.movies)
        );
      }
    );
  };

  render() {
    return (
      <div className="App">
        <div className="dark">
          <div>
            <Header />
          </div>

          <div className="Search">
            <SearchBox onMovieAdd={this.handleAddMovie} />
          </div>
          <div className="savedMovies">
            <SavedMovies
              savedMovies={this.state.movies}
              onMovieDelete={this.handleDeleteMovie}
            />
          </div>
          <div className="Footer" id="footer">
            <div className="fotmessage">
              <Typography variant="h4">movie🎥List</Typography>
              <h2>Join the community!</h2>
            </div>
            <div className="footCom">
              <h2>COMMUNITY</h2>
              <Link href="https://discord.com/">Discord</Link>
              <Link href="https://twitter.com/home?lang=en">Twiter</Link>
            </div>
            <div className="footLegal">
              <h2>LEGAL</h2>
              <Link href="#">Terms and conditions</Link>
              <Link href="#">Privacy policy</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
