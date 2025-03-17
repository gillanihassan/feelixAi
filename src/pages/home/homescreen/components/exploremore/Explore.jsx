import { Container, Row, Col, Card } from "react-bootstrap";
import style from "./styles.module.css";

const cardData = [
  {
    title: "Contact Modules",
    text: "Connect zapier with Feeli.ai Connect zapier with Feeli.aiConnect zapier with Feeli.ai",
  },
  {
    title: "Snippets",
    text: "Connect zapier with Feeli.ai Connect zapier with Feeli.aiConnect zapier with Feeli.ai",
  },
  {
    title: "Closing Notes",
    text: "Connect zapier with Feeli.ai Connect zapier with Feeli.aiConnect zapier with Feeli.ai",
  },
  {
    title: "Dynamic Variables",
    text: "Connect zapier with Feeli.ai Connect zapier with Feeli.aiConnect zapier with Feeli.ai",
  },
  {
    title: "Reports Module",
    text: "Connect zapier with Feeli.ai Connect zapier with Feeli.aiConnect zapier with Feeli.ai",
  },
  {
    title: "Growth Widget",
    text: "Connect zapier with Feeli.ai Connect zapier with Feeli.aiConnect zapier with Feeli.ai",
  },
];

function CardGrid() {
  return (
    <Container fluid className={`${style.mainContainer} mt-4 mb-4`}>
      <h4 className="mb-3">Explore more</h4>
      <Row className="g-2">
        {cardData.map((item, index) => (
          <Col key={index} xs={12} md={4} lg={4}>
            <Card className="p-3 border-2 shadow-sm">
              <Card.Body>
                <div className="d-flex align-items-center gap-2">
                  <input type="checkbox" />
                  <Card.Title className="mb-1">{item.title}</Card.Title>
                </div>
                <Card.Text className="text-muted">{item.text}</Card.Text>
                <a
                  href="#"
                  className="text-primary fw-bold"
                  style={{ color: "red" }}
                >
                  Learn More
                </a>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default CardGrid;
