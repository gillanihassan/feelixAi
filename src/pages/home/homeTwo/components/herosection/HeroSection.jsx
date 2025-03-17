import { Button, Col, Container, Image, Row } from "react-bootstrap";
import HeroImage from "../../../../../assets/images/homeTwo/hero.png";

import styles from "./styles.module.css";

function HeroSection() {
  return (
    <Container className="mt-5 d-flex justify-content-center align-items-center ">
      <Row className="align-items-center">
        <Col lg={6} md={6} className="text-center text-md-start">
          <h1 className={`${styles.headingColor} fw-bold`}>
            Innovating <br /> Customer Excellence
          </h1>
          <p className={`${styles.para} mt-1`}>
            We infuse artificial intelligence with human emotion to help your
            delivery exceptional customer experiences. our tailored and
            solutions and expert consultancy help ypu personalize support and
            unlock valuable insights
          </p>
          <div className="mt-5">
            <Button className={`${styles.buttonTop} me-4`}>Get in Touch</Button>
            <Button className={`${styles.buttonBottom}`}>Try Now</Button>
          </div>
        </Col>
        <Col lg={6} md={6} className="text-center mt-4 mt-md-0">
          <Image src={HeroImage} fluid />
        </Col>
      </Row>
    </Container>
  );
}

export default HeroSection;
