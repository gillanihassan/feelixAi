import {
  Container,
  Row,
  Col,
  Form,
  Button,
  InputGroup,
  ListGroup,
} from "react-bootstrap";
import style from "./styles.module.css";

const ChatbotThree = () => {
  const chats = [
    "Data Acquisition System",
    "User Request: Summary",
    "Efficient Worker Naming",
    "User Assistant: Summary",
    "Staff AI Task Matching",
    "AR Technology Explained",
    "Solar Energy",
    "Staff Ai Task Matching",
    " AR Technology Explained",
  ];

  return (
    <Container fluid className={`${style.mainContainer} `}>
      <Row>
        <Col
          md={3}
          className={`${style.columnFirst} bg-light border-end p-3 d-flex flex-column`}
        >
          <Row>
            <Col lg={12}>
              <Button
                className="w-100 mb-3 text-white"
                style={{ backgroundColor: "#33D1C4", border: "none" }}
              >
                + New Chat
              </Button>
            </Col>
            <Col lg={12}>
              <InputGroup className="mb-3">
                <InputGroup.Text>
                  <i className="bi bi-search "></i>
                </InputGroup.Text>
                <Form.Control type="text" placeholder="Search" />
              </InputGroup>
            </Col>
          </Row>

          {/* Chat List */}
          <h6 className="mb-2">Chat Id</h6>
          <ListGroup variant="flush">
            {chats.map((chat, index) => (
              <ListGroup.Item key={index} action>
                <strong>(ID #)</strong> {chat}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>

        <Col md={9} className="d-flex flex-column">
          <div className="d-flex flex-column flex-grow-1 justify-content-end align-items-center">
            <div>
              <p>Configure Chatbot</p>
            </div>
          </div>
          <div className="mb-2 ">
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

export default ChatbotThree;
