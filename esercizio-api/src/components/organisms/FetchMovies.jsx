import { useState, useEffect } from "react";

function FetchMovies() {
  const apiToken = import.meta.env.VITE_MOVIEDB_TOKEN;
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://api.themoviedb.org/3/movie/popular",
          {
            headers: {
              Authorization: `Bearer ${apiToken}`,
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setMovies(data.results);
        console.log(data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>lista di film</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <h2>{movie.title}</h2>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
            <h4>{movie.release_date}</h4>
            <p>{movie.overview}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FetchMovies;
