import React, { useEffect, useReducer} from 'react';
import Header from './components/Header';
import Movie from './components/Movie';
import SearchMovie from './components/SearchMovie';
import { initialState, SearchReducer } from './store/reducer/SearchReducer';
import axios from 'axios';
import './App.css';
import { Oval } from 'react-loader-spinner';
import { SearchActionType } from './interface/SearchAction';
import { MovieProps } from '@/interface/MovieProps';
import { SearchCondition } from './interface/SearchCondition';

const MOVIE_API_URL = 'https://www.omdbapi.com/?s=man&apikey=4a3b711b';

const App = () => {
  const [state, dispatch] = useReducer(SearchReducer, initialState);

  useEffect(() => {
    axios.get(MOVIE_API_URL)
    .then(jsonResponse => {
      dispatch({
        type: SearchActionType.SEARCH_MOVIES_SUCCESS,
        payload: jsonResponse.data.Search
      });
    });
  }, []);

  const refreshPage = () => {
    window.location.reload();
  };

  const search = (searchCondition: SearchCondition) => {
    dispatch({
      type: SearchActionType.SEARCH_MOVIES_REQUEST
    });

    axios(`https://www.omdbapi.com/?s=${searchCondition.Title}&y=${searchCondition.Year}&apikey=4a3b711b`)
    .then(jsonResponse => {
      if (jsonResponse.data.Response === 'True') {
        dispatch({
          type: SearchActionType.SEARCH_MOVIES_SUCCESS,
          payload: jsonResponse.data.Search
        });
      } else {
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
      <div className="loader">
        <Oval
          color='gray'
          height='3rem'
          width='3rem'
        />
      </div>
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
        <Header text="Movie Search APP" />
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
