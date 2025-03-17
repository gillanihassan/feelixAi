import { Container, Row, Col, Form, Button, InputGroup } from "react-bootstrap";
import chatbotLogo from "../../assets/images/chatbot/Chatbot.png";
import style from "./styles.module.css";

const ChatbotUI = () => {
  return (
    <Container fluid className={`${style.mainContainer} `}>
      <Row>
        <Col
          md={3}
          className={`${style.columnFirst} bg-light border-end p-3 d-flex flex-column`}
        >
          <h5 className={`${style.customFeelixHeading}`}>Feelix AI Agent</h5>
          <Form>
            <Form.Group className="mb-2">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Feelix AI Agent" />
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label>Instructions</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="AI support agent details..."
              />
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label>Model</Form.Label>
              <Form.Select>
                <option>GPT-3.5-Turbo</option>
                <option>GPT-4</option>
              </Form.Select>
            </Form.Group>

            <Row className="align-items-center justify-content-between mb-3">
              <Col md={6} className="d-flex align-items-center">
                <Form.Check
                  type="switch"
                  id="file-search-toggle"
                  label="File Search"
                  className={`${style.customSwitch}`}
                />
              </Col>
              <Col md={6} className="text-end">
                <Button className={`${style.fileButton} text-white`}>
                  + Files
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>

        <Col md={9} className="d-flex flex-column">
          <div className="d-flex flex-column flex-grow-1 justify-content-center align-items-center">
            <div className="border-5 p-4 text-center">
              <img
                src={chatbotLogo}
                alt="Chatbot"
                className={`${style.chatbotImage} mb-3`}
              />
              <h4>
                Welcome to the
                <span style={{ color: "#3BC1C5" }}>Chatbot!</span>
              </h4>
              <p>Hi there! I am your AI assistant. How can I help you today?</p>
            </div>
          </div>
          <div className="mb-3 ">
            <Row className="g-2">
              <Col xs={12} sm="auto" className="flex-grow-1">
                <InputGroup>
                  <Form.Control
                    type="text"
                    placeholder="What's the current status of my project?"
                  />
                </InputGroup>
              </Col>
              <Col xs={12} sm="auto">
                <Button className={`${style.inputButton} w-100`}>Send</Button>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ChatbotUI;
