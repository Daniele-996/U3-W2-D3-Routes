import { useState, useEffect } from "react";
import { Col, Container, Row, Spinner, Image, Alert } from "react-bootstrap";

const TVShow = () => {
  const [series, setSeries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const searchQueries = ["Breaking Bad", "The Walking Dead", "Prison Break"];

  useEffect(() => {
    const fetchAllTVShows = async () => {
      setLoading(true);
      setError(null);

      const API_KEY = "ef76adc";

      try {
        const results = await Promise.all(
          searchQueries.map(async (query) => {
            const url = `http://www.omdbapi.com/?s=${encodeURIComponent(
              query
            )}&type=series&apikey=${API_KEY}`;
            const response = await fetch(url);
            const data = await response.json();

            if (data.Response === "True") {
              return data.Search.slice(0, 2);
            } else {
              return [];
            }
          })
        );

        const flattenedResults = results.flat();
        setSeries(flattenedResults);
      } catch (err) {
        console.log(err);
        setError("Errore nella chiamata API");
      } finally {
        setLoading(false);
      }
    };

    fetchAllTVShows();
  }, []);

  return (
    <Container fluid className="mt-3">
      {loading && (
        <Row className="justify-content-center my-3">
          <Spinner animation="border" role="status" />
        </Row>
      )}

      {error && (
        <Row>
          <Col>
            <Alert variant="danger">{error}</Alert>
          </Col>
        </Row>
      )}

      <Row xs={1} sm={2} md={3} lg={4} className="g-3">
        {series.map((show) => (
          <Col key={show.imdbID} className="text-center">
            <Image
              src={
                show.Poster !== "N/A"
                  ? show.Poster
                  : "https://via.placeholder.com/300x450?text=No+Image"
              }
              alt={show.Title}
              fluid
            />
            <h6 className="mt-2">{show.Title}</h6>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default TVShow;
