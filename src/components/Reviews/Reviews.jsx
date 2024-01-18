import { useParams } from "react-router-dom";
import { useData } from "../../hooks/useData";
import { fetchReviewById } from "../../services/api";

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews, error] = useData(fetchReviewById, movieId);

  if (error) {
    return <p>error: {error}</p>;
  }

  if (!reviews) {
    return <p>Loading...</p>;
  }

  if (reviews.length === 0) return <p>There are no reviews for this movie</p>;

  return (
    <div>
      <ul>
        {reviews.map(review => (
          <li key={review.id}>
            <h2>{review.author_details.username}</h2>
            {review.content}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
