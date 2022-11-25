// import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import React, { useState } from "react";
// import { Button } from "@material-ui/core";
// import TrashIcon from "@material-ui/icons/Delete";
// import StarIcon from "@material-ui/icons/StarOutlined";
import "./Modal.css";
import styles from "./Modal.css";

// const MovieItem = (props) => {
//   const movie = props.movie;
//   const imgUrl = `https://image.tmdb.org/t/p/w300${movie.poster_path}`;
//   const [ratings, setRatings] = useState([
//     { id: 0, active: false },
//     { id: 1, active: false },
//     { id: 2, active: false },
//     { id: 3, active: false },
//     { id: 4, active: false },
//   ]);

//   return (
//     <div className={styles.movie_item} key={movie.id}>
//       <div className={styles.movie_poster}>
//         <img src={imgUrl} alt={movie.title} />
//       </div>
//       <div className={styles.descriptiom}>
//         <div className={styles.movie_title}>{movie.title}</div>
//         {/* <span>{movie.release_date}</span> */}

//         <div className={styles.starRating}>
//           <div className={styles.rating}>{movie.vote_average}</div>
//           <div className={styles.star}>
//             {ratings.map((item, index) => {
//               return (
//                 <StarIcon
//                   className={[styles.star, item.active && styles.active].join(
//                     " "
//                   )}
//                   onMouseOver={() => handleMouseOver(item)}
//                 />
//               );
//             })}
//           </div>
//         </div>
//         <div className={styles.button}>
//           <Button onClick={() => props.onMovieDelete(movie.id)}>
//             <TrashIcon />
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// };

// const SavedMovies = (props) => {
//   const unique = [];
//   props.savedMovies.filter(function (item) {
//     var i = unique.findIndex((x) => x.title === item.title);
//     if (i <= -1) {
//       unique.push({
//         id: item.id,
//         title: item.title,
//         backdrop_path: item.backdrop_path,
//         overview: item.overview,
//         poster_path: item.poster_path,
//         release_date: item.release_date,
//         vote_average: item.vote_average,
//       });
//     }
//     return null;
//   });

//   console.log(unique);

//   return (
//     <div>
//       <div className={styles.favoritTitle}>
//         <h2>Favorites</h2>
//       </div>
//       {props.savedMovies && props.savedMovies.length > 0 ? (
//         <div className={styles.FavoritList}>
//           {unique.map((movie) => (
//             <MovieItem
//               movie={movie}
//               onMovieDelete={props.onMovieDelete}
//               key={movie.id}
//             />
//           ))}
//         </div>
//       ) : (
//         "No saved movies"
//       )}
//     </div>
//   );
// };

// export default SavedMovies;

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const movie = props.movie;
  console.log(movie);
  const imgUrl = `https://image.tmdb.org/t/p/w300${movie.poster_path}`;

  return (
    <div>
      <Button onClick={console.log("click")}>Details</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <div className={styles.movie_item} key={movie.id}>
            <div className={styles.movie_poster}>
              <img src={imgUrl} alt={movie.title} />
            </div>
            <div className={styles.descriptiom}>
              <div className={styles.movie_title}>{movie.title}</div>
              <span>{movie.release_date}</span>
              <span>{movie.overview}</span>

              <div className={styles.starRating}>
                <div className={styles.rating}>{movie.vote_average}</div>
              </div>
            </div>
          </div>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
