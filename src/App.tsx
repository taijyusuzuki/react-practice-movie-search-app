import React, { useEffect, useReducer, useState } from 'react';
import Header from './components/Header';
import Movie from './components/Movie';
import SearchMovie from './components/SearchMovie';
import { initialState, reducer } from './store/reducer/index';
import axios from 'axios';
import './App.css';
import { SearchActionType } from './interface/SearchAction';
import { MovieProps } from '@/interface/MovieProps';

const MOVIE_API_URL = 'https://www.omdbapi.com/?s=man&apikey=4a3b711b';

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // const [loading, setLoading] = useState(true);
  // const [movies, setMovies] = useState([]);
  // const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    axios.get(MOVIE_API_URL)
    .then(jsonResponse => {
      // setMovies(jsonResponse => {
      //   setMovies(jsonResponse.Search);
      //   setLoading(false);
      // });
      dispatch({
        type: SearchActionType.SEARCH_MOVIES_SUCCESS,
        payload: jsonResponse.data.Search
      });
    });
  }, []);

  const refreshPage = () => {
    window.location.reload();
  };

  const search = (searchValue: string) => {
    // setLoading(true);
    // setErrorMessage(null);

    dispatch({
      type: SearchActionType.SEARCH_MOVIES_REQUEST
    });

    axios(`https://www.omdbapi.com/?s=${searchValue}&apikey=4a3b711b`)
    .then(jsonResponse => {
      if (jsonResponse.data.Response === 'True') {
        // setMovies(jsonResponse.Search);
        // setLoading(false);
        dispatch({
          type: SearchActionType.SEARCH_MOVIES_SUCCESS,
          payload: jsonResponse.data.Search
        });
      } else {
        // setErrorMessage(jsonResponse.Error);
        // setLoading(false);
        dispatch({
          type: SearchActionType.SEARCH_MOVIES_FAILURE,
          error: jsonResponse.data.Error
        });
      }
    });
  };

  const { movies, errorMessage, loading } = state;

  const retrievedMovies =
    loading && !errorMessage ? (
      <span>loading...</span>
    ) : errorMessage ? (
      <div className="errorMessage">{errorMessage}</div>
    ) : (
      movies.map((movie: MovieProps, index: number) => {
        return (
          <Movie key={`${index}-${movie.Title}`} movie={movie} />
        )
      })
    );

  return (
    <div className="App">
      <div className="m-container">
        <Header text="HOOKED" />
        <SearchMovie search={search} />
        <p className="App-intro">Sharing a few of our favourite movies</p>
        <div className="movies">
          {retrievedMovies}
        </div>
      </div>
    </div>
  );
};

export default App;
