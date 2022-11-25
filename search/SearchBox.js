import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { searchMovies } from "../shared/API";
import { makeStyles } from "@material-ui/core/styles";
import styles from "./SearchBox.module.css";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

// import Box from "@mui/material/Box";
// import Typography from "@mui/material/Typography";
// import Modal from "@mui/material/Modal";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

// ----------------------------
// ce este ascuns este oentru modal
// -------------------------------

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

const MovieList = (props) => {
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  // const [openModal, setOpenModal] = React.useState(false);
  // const handleOpenModal = (id) => setOpenModal(id)(true);
  // const handleCloseModal = () => setOpenModal()(false);

  return (
    <ul className={styles.list}>
      {props.movies.map((movie) => (
        <div className={styles.listItem}>
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w154${movie.poster_path}`}
              alt={movie.title}
            />
          </div>
          <div className={styles.texth}>
            <h5 className={styles.texth}>{movie.title}</h5>
          </div>
          <div className={styles.textt}>
            <h4 className={styles.textt}> {movie.release_date}</h4>
          </div>

          <div>
            {/* <Button id={movie.id} onClick={handleOpenModal} preventDefault>
              Details
            </Button>
            <Modal
              open={open}
              // onClick={handleOpen}
              onClose={handleCloseModal}
              id={movie.id}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box id={movie.id} sx={style}>
                <Typography id={movie.id} variant="h6" component="h2">
                  {movie.title}
                </Typography>

                <div className={styles.movie_poster}>
                  <img
                    src={`https://image.tmdb.org/t/p/w154${movie.poster_path}`}
                    alt={movie.title}
                  />
                </div>
                <div className={styles.descriptiom}>
                  <span>{movie.release_date}</span>
                  <span>{movie.overview}</span>

                  <div className={styles.starRating}>
                    <div className={styles.rating}>{movie.vote_average}</div>
                  </div>
                </div>
              </Box>
            </Modal> */}

            <Button
              className={styles.addMovie}
              color="secondary"
              onClick={() => {
                handleClick();
                // e.preventDefault();
                props.onMovieAdd(movie);
              }}
            >
              <AddIcon /> Add movie
            </Button>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
              <Alert
                onClose={handleClose}
                severity="success"
                sx={{ width: "100%" }}
              >
                Movie successfully added !
              </Alert>
            </Snackbar>
          </div>
        </div>
      ))}
    </ul>
  );
};

const SearchBox = (props) => {
  const [term, setTerm] = useState("");
  const [movies, setMovies] = useState([]);
  // searchMovies("new").then((res) => setMovies(res.data.results));
  // const [searchMode, setSearchMode] = useState("movies");
  const useStyles = makeStyles({
    input: {
      color: "gray",
    },
  });
  const classes = useStyles();

  const localMovieAdd = (movie) => {
    setMovies([]);
    props.onMovieAdd(movie);
  };
  return (
    <div className={styles.main}>
      <div className={styles.searchd}>
        <div className={styles.box}>
          <TextField
            inputProps={{ className: classes.input }}
            // color="gray"
            className="text"
            label="Search for a movie"
            InputLabelProps={{
              style: { color: "gray" },
            }}
            variant="outlined"
            color="primary"
            value={term}
            onChange={(e) => {
              setTerm(e.target.value);
            }}
            onKeyPress={(event) => {
              if (event.key === "Enter") {
                searchMovies(term).then((res) => setMovies(res.data.results));
                setTerm("");
              }
            }}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              searchMovies(term).then((res) => setMovies(res.data.results));
              setTerm("");
            }}
          >
            Search
          </Button>
        </div>
      </div>
      <div className={styles.list}>
        <MovieList movies={movies} key={movies.id} onMovieAdd={localMovieAdd} />
      </div>
    </div>
  );
};

export default SearchBox;
