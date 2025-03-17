import { Container, Row, Col, Card, Button } from "react-bootstrap";
import style from "./styles.module.css";

const colors = ["#FFE4B5", "#444", "#FF1493", "#E0FFE0", "#D8BFD8", "#4B0082"];

function ColorCards() {
  return (
    <Container fluid className={`${style.mainContainer} mt-4 mb-4`}>
      <div className={`${style.mainDiv}`}>
        <div className="d-flex justify-content-between align-items-center mb-2">
          <h3 className={`${style.customHeading}`}>How to use the product</h3>
          <Button className={`${style.customButton}`}>View More</Button>
        </div>
        <Row className="g-2">
          {colors.map((color, index) => (
            <Col key={index} xs={12} md={4} lg={2}>
              <Card
                className="shadow-sm border-0"
                style={{
                  backgroundColor: color,
                  height: "150px",
                  borderRadius: "15px",
                }}
              />
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
}

export default ColorCards;
