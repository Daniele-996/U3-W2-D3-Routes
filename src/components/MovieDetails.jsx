import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Spinner,
  Alert,
  Image,
  Button,
} from "react-bootstrap";

const MovieDetails = () => {
  const { imdbID } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await fetch(
          `https://www.omdbapi.com/?i=${imdbID}&apikey=ef76adc`
        );
        const data = await response.json();
        if (data.Response === "True") {
          setMovie(data);
        } else {
          setError(data.Error);
        }
      } catch {
        setError("Errore nella chiamata API");
      } finally {
        setLoading(false);
      }
    };

    if (imdbID) fetchMovie();
  }, [imdbID]);

  if (loading)
    return (
      <Container className="text-center mt-5">
        <Spinner animation="border" />
      </Container>
    );

  if (error)
    return (
      <Container className="mt-5">
        <Alert variant="danger">{error}</Alert>
      </Container>
    );

  if (!movie) return null;

  return (
    <Container className="mt-4">
      <Button variant="secondary" onClick={() => navigate(-1)} className="mb-3">
        ← Torna indietro
      </Button>
      <Row>
        <Col md={4}>
          <Image
            src={
              movie.Poster !== "N/A"
                ? movie.Poster
                : "https://via.placeholder.com/300x450?text=No+Image"
            }
            alt={movie.Title}
            fluid
          />
        </Col>
        <Col md={8}>
          <h2>{movie.Title}</h2>
          <p>
            <strong>Anno:</strong> {movie.Year}
          </p>
          <p>
            <strong>Genere:</strong> {movie.Genre}
          </p>
          <p>
            <strong>Regista:</strong> {movie.Director}
          </p>
          <p>
            <strong>Attori:</strong> {movie.Actors}
          </p>
          <p>
            <strong>Trama:</strong> {movie.Plot}
          </p>
          <p>
            <strong>IMDb Rating:</strong> {movie.imdbRating}
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default MovieDetails;
