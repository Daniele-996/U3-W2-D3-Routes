import { useState, useEffect } from "react";
import { Container, Row, Col, Image, Spinner, Alert } from "react-bootstrap";

const CreateGallery = ({ film }) => {
  const [galleries, setGalleries] = useState({});

  useEffect(() => {
    film.forEach((query) => {
      fetchData(query);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [film]);

  const fetchData = (query) => {
    if (!query) return;

    setGalleries((prevState) => ({
      ...prevState,
      [query]: { loading: true, error: null, images: [] },
    }));

    const API_KEY = "ef76adc";
    const url = `http://www.omdbapi.com/?s=${encodeURIComponent(
      query
    )}&apikey=${API_KEY}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.Response === "True") {
          const onlySixImg = data.Search.slice(0, 6);
          setGalleries((prevState) => ({
            ...prevState,
            [query]: { loading: false, error: null, images: onlySixImg },
          }));
        } else {
          setGalleries((prevState) => ({
            ...prevState,
            [query]: { loading: false, error: data.Error, images: [] },
          }));
        }
      })
      .catch(() => {
        setGalleries((prevState) => ({
          ...prevState,
          [query]: {
            loading: false,
            error: "Errore nella chiamata API",
            images: [],
          },
        }));
      });
  };

  const renderNewGallery = (query) => {
    const gallery = galleries[query] || {};
    const { images = [], loading = false, error = null } = gallery;

    return (
      <div key={query} className="mb-3">
        <h4>{query}</h4>

        {loading && (
          <div className="d-flex justify-content-center my-3">
            <Spinner animation="border" role="status" />
          </div>
        )}

        {error && <Alert variant="danger">{error}</Alert>}

        <Row xs={1} sm={2} lg={6} xl={6} className="g-2">
          {images.map((poster) => (
            <Col key={poster.imdbID} className="text-center">
              <Image
                src={
                  poster.Poster !== "N/A"
                    ? poster.Poster
                    : "https://via.placeholder.com/300x450?text=No+Image"
                }
                alt={poster.Title}
                fluid
              />
            </Col>
          ))}
        </Row>
      </div>
    );
  };

  return (
    <Container className="mt-1">
      {film.map((q) => renderNewGallery(q))}
    </Container>
  );
};

export default CreateGallery;
