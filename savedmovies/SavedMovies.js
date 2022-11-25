import React, { useState } from "react";
import { Button } from "@material-ui/core";
import TrashIcon from "@material-ui/icons/Delete";
import StarIcon from "@material-ui/icons/StarOutlined";
import "./SavedMovies.module.css";
import styles from "./SavedMovies.module.css";

const MovieItem = (props) => {
  const movie = props.movie;
  const imgUrl = `https://image.tmdb.org/t/p/w300${movie.poster_path}`;
  const [ratings, setRatings] = useState([
    { id: 0, active: false },
    { id: 1, active: false },
    { id: 2, active: false },
    { id: 3, active: false },
    { id: 4, active: false },
  ]);

  const handleMouseOver = (item) => {
    const items = ratings.map((el, index) => {
      console.log(index, item.id);
      if (index <= item.id) {
        return Object.assign({}, { ...el }, { active: true });
      }
      return Object.assign({}, { ...el }, { active: false });
    });
    setRatings(items);
  };

  return (
    <div className={styles.movie_item} key={movie.id}>
      <div className={styles.movie_poster}>
        <img src={imgUrl} alt={movie.title} />
      </div>
      <div className={styles.descriptiom}>
        <div className={styles.movie_title}>{movie.title}</div>
        <div className={styles.starRating}>
          <div className={styles.rating}>{movie.vote_average}</div>
          <div className={styles.star}>
            {ratings.map((item, index) => {
              return (
                <StarIcon
                  className={[styles.star, item.active && styles.active].join(
                    " "
                  )}
                  onMouseOver={() => handleMouseOver(item)}
                />
              );
            })}
          </div>
        </div>
        <div className={styles.button}>
          <Button onClick={() => props.onMovieDelete(movie.id)}>
            <TrashIcon />
          </Button>
        </div>
      </div>
    </div>
  );
};

const SavedMovies = (props) => {
  const unique = [];
  props.savedMovies.filter(function (item) {
    var i = unique.findIndex((x) => x.title === item.title);
    if (i <= -1) {
      unique.push({
        id: item.id,
        title: item.title,
        backdrop_path: item.backdrop_path,
        overview: item.overview,
        poster_path: item.poster_path,
        release_date: item.release_date,
        vote_average: item.vote_average,
      });
    }
    return null;
  });

  console.log(unique);

  return (
    <div>
      <div className={styles.favoritTitle}>
        <h2>Favorites</h2>
      </div>
      {props.savedMovies && props.savedMovies.length > 0 ? (
        <div className={styles.FavoritList}>
          {unique.map((movie) => (
            <MovieItem
              movie={movie}
              onMovieDelete={props.onMovieDelete}
              key={movie.id}
            />
          ))}
        </div>
      ) : (
        "No saved movies"
      )}
    </div>
  );
};
console.log(SavedMovies);
export default SavedMovies;
