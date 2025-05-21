import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <footer>
      <Container className="mt-5">
        <Row className="justify-content-center">
          <Col xs={12} md={10} lg={8}>
            <Row className="mb-2">
              <Col>
                <i className="bi bi-facebook mx-1"></i>
                <i className="bi bi-instagram mx-1"></i>
                <i className="bi bi-twitter-x mx-1"></i>
                <i className="bi bi-youtube mx-1"></i>
              </Col>
            </Row>

            <Row className="row-cols-1 row-cols-sm-2 row-cols-md-4">
              <Col className="footer-links">
                <p>
                  <a href="#">Audio and Subtitles</a>
                </p>
                <p>
                  <a href="#">Media Center</a>
                </p>
                <p>
                  <a href="#">Privacy</a>
                </p>
                <p>
                  <a href="#">Contact us</a>
                </p>
              </Col>
              <Col className="footer-links">
                <p>
                  <a href="#">Audio Description</a>
                </p>
                <p>
                  <a href="#">Investor Relations</a>
                </p>
                <p>
                  <a href="#">Legal Notices</a>
                </p>
              </Col>
              <Col className="footer-links">
                <p>
                  <a href="#">Help Center</a>
                </p>
                <p>
                  <a href="#">Jobs</a>
                </p>
                <p>
                  <a href="#">Cookie Preferences</a>
                </p>
              </Col>
              <Col className="footer-links">
                <p>
                  <a href="#">Gift Cards</a>
                </p>
                <p>
                  <a href="#">Terms of Use</a>
                </p>
                <p>
                  <a href="#">Corporate Information</a>
                </p>
              </Col>
            </Row>

            <Row>
              <Col className="mb-2">
                <Button
                  variant="secondary"
                  size="sm"
                  className="rounded-0 mt-3 footer-button"
                >
                  Service Code
                </Button>
              </Col>
            </Row>

            <Row>
              <Col className="mb-2 mt-2 copyright">
                © 1997-2023 Netflix, Inc.
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
