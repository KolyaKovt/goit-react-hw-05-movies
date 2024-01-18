import { useParams } from "react-router-dom";
import { useData } from "../../hooks/useData";
import { fetchCastById } from "../../services/api";

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast, error] = useData(fetchCastById, movieId);

  if (error) {
    return <p>error: {error}</p>;
  }

  if (!cast) {
    return <p>Loading...</p>;
  }

  const defaultImg =
    "https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700";

  return (
    <div>
      <ul>
        {cast.map(actor => {
          const urlToImg = `https://image.tmdb.org/t/p/w500/${actor.profile_path}`;
          
          return (
            <li key={actor.id}>
              <img src={actor.profile_path ? urlToImg : defaultImg} width={200} alt="actor" />
              <p>{actor.name}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Cast;
