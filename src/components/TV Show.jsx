import { Col, Container, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";

const TVShow = () => {
  const location = useLocation();
  console.log(location);
  return (
    <Container fluid>
      <Row>
        <Col className="Col-6 ">
          <h1>TV Shows</h1>
        </Col>
      </Row>
    </Container>
  );
};
export default TVShow;
