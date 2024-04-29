import { Suspense, useEffect, useState, useRef } from "react";
import { Outlet, useParams } from "react-router-dom";
import { getMovieId } from "../../movies-api";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import MovieInfo from "../../components/MovieInfo/MovieInfo";
import css from "./MovieDetailsPage.module.css";

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [movie, setMovie] = useState(null);

  const location = useLocation();
  const backLinkHref = useRef(location.state ?? "/movies"); // Використовуємо useRef для збереження стану посилання повернення назад

  useEffect(() => {
    async function fetchMovieInfo() {
      try {
        setIsLoading(true);
        const data = await getMovieId(movieId);
        setMovie(data);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchMovieInfo();
  }, [movieId]);

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // Опрацювання логіки пошуку тут
  };

  return (
    <>
      <Link className={css.link} to={backLinkHref.current}>
        Go back
      </Link>

      {isLoading && <p>Loading...</p>}
      {error && <p>Error...</p>}

      {movie && <MovieInfo movie={movie} />}

      <p className={css.text}>Summary</p>
      <ul className={css.list}>
        <li>
          <Link to="cast">Actors</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
}