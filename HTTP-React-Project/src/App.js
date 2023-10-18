import React, { useState, useEffect,useCallback} from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movieData, setMovieData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);


  const fetchMovieHandler = useCallback( async () => {
    setIsLoading(true);
    setError(null)

    try {
      const response = await fetch('https://swapi.dev/api/films')
      if(!response.ok){
        throw new Error('Something went wrong');
      }
      const data = await response.json()
      
      const transformedMovies = data.results.map(movieData => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releaseDate: movieData.realse_date
        }
      });
      setMovieData(transformedMovies);
      setIsLoading(false);
    }catch(e){
      console.log('hello')
      setIsLoading(false);
      setError(e.message);
    }
    
  },[])

  useEffect(()=>{
    fetchMovieHandler();
  },[fetchMovieHandler]);

  let content = <p>Found no Movies</p>

  if(movieData.length > 0){
    content = <MoviesList movies={movieData} />
  }
  if(error){
    content = <p>{error}</p>
  }
  if(isLoading){
    content = <p>Loading...</p>
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMovieHandler}>Fetch Movies</button>
      </section>
      <section>
        {content}
      </section>
    </React.Fragment>
  );
}

export default App;
