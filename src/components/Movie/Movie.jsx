import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { fetchMoviesById } from "../../services/api";
import { useData } from "../../hooks/useData";
import { Suspense, useRef } from "react";
import { StyledBackLink, StyledContainer } from "./Movie.styled";

const Movie = () => {
  const { movieId } = useParams();
  const [movieData, setMovieData, error] = useData(fetchMoviesById, movieId);
  const location = useLocation();

  const backUrl = useRef(location.state?.from || "/movies");

  if (error) {
    return <h1>Error: {error}</h1>;
  }

  if (!movieData) {
    return <h1>loading</h1>;
  }

  const {
    title,
    poster_path,
    release_date,
    vote_average,
    overview,
    genres,
  } = movieData;

  const defaultImg =
    "https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700";

  const img = `https://image.tmdb.org/t/p/w500/${poster_path}`;
  const releaseYear = new Date(release_date).getFullYear();
  const userScore = `${Math.round(vote_average * 10)}%`;

  const genresArray = genres.map(genre => genre.name);

  return (
    <>
      <StyledContainer>
        <StyledBackLink to={backUrl.current}>Go back</StyledBackLink>
        <img src={poster_path ? img : defaultImg} width={250} alt="poster" />
        <h1>
          {title} {releaseYear ? `(${releaseYear})` : ""}
        </h1>
        <p>User score: {userScore}</p>
        <h2>Overview</h2>
        <p>{overview}</p>
        <h3>Genres</h3>
        <p>{genresArray.join(" ")}</p>
      </StyledContainer>
      <StyledContainer>
        <p>Additional information</p>
        <ul>
          <li>
            <Link to={"cast"}>Cast</Link>
          </li>
          <li>
            <Link to={"reviews"}>Reviews</Link>
          </li>
        </ul>
      </StyledContainer>
      <Suspense fallback={<h1>Loading ....</h1>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Movie;
