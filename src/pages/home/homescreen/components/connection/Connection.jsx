import { Card, Col, Container, Row } from "react-bootstrap";
import iconOne from "../../../../../assets/images/home/icon1.png";
import iconTwo from "../../../../../assets/images/home/icon2.png";
import iconThree from "../../../../../assets/images/home/icon3.png";
import IconFour from "../../../../../assets/images/home/icon4.png";
import IconFive from "../../../../../assets/images/home/icon5.png";

import style from "./styles.module.css";

const connections = [
  {
    name: "Whatsapp",
    icon: iconOne,
    status: "success",
    footerText: "View Connection",
    rightIcon: IconFive,
  },
  {
    name: "Star Force",
    icon: iconTwo,
    status: "success",
    footerText: "View Connection",
    rightIcon: IconFive,
  },
  {
    name: "Black App",
    icon: iconThree,
    status: "success",
    footerText: "View Connection",
    rightIcon: IconFour,
  },
];

function Connection() {
  return (
    <Container fluid className="mt-4">
      <Row className={`justify-content-center g-3 ${style.customRow}`}>
        {connections.map((conn, index) => (
          <Col md={4} key={index}>
            <Card
              className={`shadow-sm ${
                index === 3 ? "border-danger" : `border-${conn.status}`
              } `}
              style={{ borderWidth: "2px" }}
            >
              <Card.Body>
                <div className="d-flex align-items-center position-relative">
                  <img
                    src={conn.icon}
                    alt={conn.name}
                    width={30}
                    height={30}
                    className="me-2"
                  />
                  <strong>{conn.name}</strong>
                  <img
                    className="position-absolute end-0"
                    src={conn.rightIcon}
                    alt="status-icon"
                    width={24}
                    height={24}
                  />
                </div>
              </Card.Body>
              <Card.Footer
                className={`border-top border-${conn.status}  bg-transparent border-0 text-${conn.status}`}
              >
                {[conn.footerText].map((text, idx) => (
                  <small key={idx}>{text}</small>
                ))}
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Connection;
