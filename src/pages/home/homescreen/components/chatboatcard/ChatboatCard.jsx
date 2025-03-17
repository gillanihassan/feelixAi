import { Button, Card, Col, Container, Row } from "react-bootstrap";
import FrameImage from "../../../../../assets/images/chatbot/FrameImage.png";
import style from "./styles.module.css";

function ChatboatCard() {
  return (
    <Container fluid className={`${style.mainContainer} my-3`}>
      <Card className={`${style.mainCard} p-4`}>
        <Row>
          <Col
            md={2}
            className="text-center d-flex flex-column justify-content-center"
          >
            <img
              src={FrameImage}
              alt="Chatbot"
              className={`${style.customImage} img-fluid`}
            />
          </Col>

          <Col md={8} className="d-flex flex-column justify-content-center ">
            <h4 className="fw-bold">Configure Chatbot</h4>
            <p style={{ fontSize: "14px" }} className="pr-5">
              Configure Chatbot allows you to customize the behavior,
              appearance, and responses of your chatbot, ensuring it meets your
              specific needs and user preferences. With intuitive settings, you
              can easily adjust the chatbots parameters for optimal performance
              and user engagement.
            </p>
          </Col>

          <Col md={2} className="d-flex flex-column justify-content-end">
            <Button
              variant="light"
              className={`${style.customButton}  fw-bold text-dark`}
            >
              Configure Chatbot
            </Button>
          </Col>
        </Row>
      </Card>
    </Container>
  );
}

export default ChatboatCard;
