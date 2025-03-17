import { Container, Row, Col, Card } from "react-bootstrap";
import icon1 from "../../../../../assets/images/chatbot/icon1.png";
import icon2 from "../../../../../assets/images/chatbot/icon2.png";
import icon3 from "../../../../../assets/images/chatbot/icon3.png";
import icon4 from "../../../../../assets/images/chatbot/icon4.png";
import icon5 from "../../../../../assets/images/chatbot/icon5.png";
import icon6 from "../../../../../assets/images/chatbot/icon6.png";
import style from "./styles.module.css";

const apps = [
  {
    name: "Whatsapp",
    desc: "Connect Whatsapp with Feeli.ai",
    img: icon1,
  },
  {
    name: "Zapier",
    desc: "Connect Zapier with Feeli.ai",
    img: icon2,
  },
  {
    name: "Black App",
    desc: "Connect Black App with Feeli.ai",
    img: icon3,
  },
  {
    name: "Fierypix",
    desc: "Connect Fierypix with Feeli.ai",
    img: icon4,
  },
  {
    name: "Fedey Pro",
    desc: "Connect Zapier with Feeli.ai",
    img: icon5,
  },
  {
    name: "Vitmake",
    desc: "Connect Vitmake with Feeli.ai",
    img: icon6,
  },
];

const AppCards = () => {
  return (
    <Container fluid className={` ${style.mainContainer} py-4`}>
      <Row className="g-2">
        {apps.map((app, index) => (
          <Col key={index} md={6} lg={4}>
            <Card className={`${style.mainCard}  shadow-sm border-1 rounded-4`}>
              <div className="d-flex align-items-start">
                <div className=" me-2" style={{ width: 50, height: 50 }}>
                  <img
                    src={app.img}
                    alt={app.name}
                    className={`${style.customImage}`}
                  />
                </div>
                <div>
                  <h4 className="mb-1">{app.name}</h4>
                  <p className={`${style.customPara} mb-1`}>{app.desc}</p>
                  <a href="#" className={`${style.customLink}`}>
                    Discover
                  </a>
                </div>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default AppCards;
