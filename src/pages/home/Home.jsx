import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Image,
  Row,
} from "react-bootstrap";
import CustomerPhoto from "../../assets/images/home/customer.png";
import Notification from "../../assets/images/home/notification.png";
import icon1 from "../../assets/images/home/icon1.png";
import icon2 from "../../assets/images/home/icon2.png";
import icon3 from "../../assets/images/home/icon3.png";
import icon4 from "../../assets/images/home/icon4.png";
import icon5 from "../../assets/images/home/icon5.png";
import icon7 from "../../assets/images/home/icon7.png";
import icon8 from "../../assets/images/home/icon8.png";
import icon9 from "../../assets/images/home/icon9.png";
import Frame from "../../assets/images/home/Frame.png";
// import icon6 from "../../assets/images/home/icon6.png";
import "./style.css";
import Sidebar from "../../components/sideNavbar/Sidebar";
import { Chart, registerables } from "chart.js";
import { Line } from "react-chartjs-2";

Chart.register(...registerables);

const exploreData = [
  {
    title: "Contact Modules",
    description:
      "Connect zapier with Feelix.ai Connect zapier with Feelix.aiConnect zapier with Feelix.ai",
    link: "Learn More",
  },
  {
    title: "Snippets",
    description:
      "Connect zapier with Feelix.ai Connect zapier with Feelix.aiConnect zapier with Feelix.ai",
    link: "Learn More",
  },
  {
    title: "Closing Notes",
    description:
      "Connect zapier with Feelix.ai Connect zapier with Feelix.aiConnect zapier with Feelix.ai",
    link: "Learn More",
  },
];

const exploreDataTwo = [
  {
    title: "Dynamic Variables ",
    description:
      "Connect zapier with Feelix.ai Connect zapier with Feelix.aiConnect zapier with Feelix.ai",
    link: "Learn More",
  },
  {
    title: "Reports Module       ",
    description:
      "Connect zapier with Feelix.ai Connect zapier with Feelix.aiConnect zapier with Feelix.ai",
    link: "Learn More",
  },
  {
    title: "Growth Widget",
    description:
      "Connect zapier with Feelix.ai Connect zapier with Feelix.aiConnect zapier with Feelix.ai",
    link: "Learn More",
  },
];

const resolveTimeData = {
  labels: [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ],
  datasets: [
    {
      label: "Weekly inf",
      data: [1000, 200, 0, 1, 2, 1000, 200, 0, 1],
      borderColor: "rgb(59, 193, 197)",
      fill: false,
    },
  ],
};

const lineOption = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

function Home() {
  return (
    <Container fluid style={{ border: "5px solid red" }}>
      <Row>
        <Col fluid md={1} style={{ border: "5px solid blue" }}>
          <Sidebar />
        </Col>
        <Col
          md={11}
          style={{ border: "5px solid black", position: "relative" }}
        >
          <Row>
            <div className="d-flex justify-content-between align-items-center">
              <h2>Welcome Hassan</h2>
              <div>
                <Image src={Notification} />
                <Image
                  style={{ backgroundColor: "#FFBC99" }}
                  className="rounded-circle p-0.7"
                  src={CustomerPhoto}
                />
              </div>
            </div>
          </Row>

          <div>
            <Row className="mt-3 mb-3 px-1 ">
              <h4>Connections</h4>
              <Col
                md={4}
                style={{ border: "3px solid green", borderRadius: "10px" }}
                className="d-flex pt-3 "
              >
                <Image src={icon1} style={{ height: "30px" }} />
                <p className="ms-3">Whats app</p>
                <Image
                  className="ms-auto"
                  src={icon5}
                  style={{ height: "22px" }}
                />
              </Col>
              <Col
                md={4}
                style={{ border: "3px solid green", borderRadius: "10px" }}
                className="d-flex pt-3"
              >
                <Image src={icon2} style={{ height: "30px" }} />
                <p className="ms-3">Whats app</p>
                <Image
                  className="ms-auto"
                  src={icon5}
                  style={{ height: "22px" }}
                />
              </Col>
              <Col
                md={4}
                style={{ border: "3px solid green", borderRadius: "10px" }}
                className="d-flex pt-3"
              >
                <Image src={icon3} style={{ height: "30px" }} />
                <p className="ms-3">Whats app</p>
                <Image
                  className="ms-auto"
                  src={icon4}
                  style={{ height: "22px" }}
                />
              </Col>
            </Row>
          </div>

          <div>
            <Line data={resolveTimeData} options={lineOption} />
          </div>

          <div className="mt-5">
            <h4>Explore more</h4>
            <Row>
              {exploreData &&
                exploreData.length > 0 &&
                exploreData.map((item, index) => (
                  <Col md={4} key={index}>
                    <Card style={{ width: "23rem" }}>
                      <Card.Body
                        className="px-5"
                        style={{ position: "relative" }}
                      >
                        <Form.Check
                          className="d-inline my-check"
                          style={{
                            position: "absolute",
                            left: "12px",
                          }}
                        />
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Text>{item.description}</Card.Text>
                        <Card.Link href="#">{item.link}</Card.Link>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
            </Row>
          </div>

          <div className="mt-3">
            <Row>
              {exploreDataTwo &&
                exploreDataTwo.length > 0 &&
                exploreDataTwo.map((item, index) => (
                  <Col md={4} key={index}>
                    <Card style={{ width: "23rem" }}>
                      <Card.Body
                        className="px-5"
                        style={{ position: "relative" }}
                      >
                        <Form.Check
                          className="d-inline my-check"
                          style={{
                            position: "absolute",
                            left: "12px",
                          }}
                        />
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Text>{item.description}</Card.Text>
                        <Card.Link href="#">{item.link}</Card.Link>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
            </Row>
          </div>

          <div style={{ border: "4px solid red" }} className="px-2 mt-4 mb-4">
            <Row style={{ backgroundColor: "#6D00CC" }}>
              <Col md={2} style={{ border: "2px solid pink" }}>
                <Image src={Frame} style={{ height: "180px" }} />
              </Col>
              <Col md={8} style={{ border: "2px solid pink" }}>
                <h4>Configure Chatbot</h4>
                <p>
                  Configure Chatbot allows you to customize the behavior,
                  appearance, and responses of your chatbot, ensuring it meets
                  your specific needs and user preferences. With intuitive
                  settings, you can easily adjust the chatbots parameters for
                  optimal performance and user engagement.
                </p>
              </Col>
              <Col
                md={2}
                style={{ border: "2px solid pink", position: "relative" }}
              >
                <Button style={{ position: "absolute", bottom: "15px" }}>
                  configure chatbot
                </Button>
              </Col>
            </Row>
          </div>

          <div style={{ border: "4px solid black" }} className="px-3 mb-2">
            <Row Row className="g-4">
              <Col
                md={4}
                style={{
                  border: "2px solid yellow",
                  borderRadius: "10px",
                  position: "relative",
                }}
                className="p-4 px-5"
              >
                <Image
                  src={icon1}
                  style={{
                    height: "30px",
                    position: "absolute",
                    left: "10px",
                    top: "30px",
                  }}
                />
                <h3 className="mb-0">Watsapp</h3>
                <p className="mb-2">Connect Watsapp with Feelix.ai</p>
                <a href="#" style={{ textDecoration: "none" }}>
                  Discover
                </a>
              </Col>
              <Col
                md={4}
                style={{
                  border: "2px solid yellow",
                  borderRadius: "10px",
                  position: "relative",
                }}
                className="p-4 px-5"
              >
                <Image
                  src={icon2}
                  style={{
                    height: "30px",
                    position: "absolute",
                    left: "10px",
                    top: "30px",
                  }}
                />
                <h3 className="mb-0">Zapier</h3>
                <p className="mb-2">Connect Zapier with Feelix.ai</p>
                <a href="#" style={{ textDecoration: "none" }}>
                  Discover
                </a>
              </Col>
              <Col
                md={4}
                style={{
                  border: "2px solid yellow",
                  borderRadius: "10px",
                  position: "relative",
                }}
                className="p-4 px-5"
              >
                <Image
                  src={icon3}
                  style={{
                    height: "30px",
                    position: "absolute",
                    left: "10px",
                    top: "30px",
                  }}
                />
                <h3 className="mb-0">Zapier</h3>
                <p className="mb-2">Connect Zapier with Feelix.ai</p>
                <a href="#" style={{ textDecoration: "none" }}>
                  Discover
                </a>
              </Col>
            </Row>
          </div>

          <div style={{ border: "4px solid black" }} className="px-3 mb-4">
            <Row Row className="g-4">
              <Col
                md={4}
                style={{
                  border: "2px solid yellow",
                  borderRadius: "10px",
                  position: "relative",
                }}
                className="p-4 px-5"
              >
                <Image
                  src={icon7}
                  style={{
                    height: "30px",
                    position: "absolute",
                    left: "10px",
                    top: "30px",
                  }}
                />
                <h3 className="mb-0">Fierypix</h3>
                <p className="mb-2">Connect Fierypix with Feelix.ai</p>
                <a href="#" style={{ textDecoration: "none" }}>
                  Discover
                </a>
              </Col>
              <Col
                md={4}
                style={{
                  border: "2px solid yellow",
                  borderRadius: "10px",
                  position: "relative",
                }}
                className="p-4 px-5"
              >
                <Image
                  src={icon8}
                  style={{
                    height: "30px",
                    position: "absolute",
                    left: "10px",
                    top: "30px",
                  }}
                />
                <h3 className="mb-0">Fedey Pro</h3>
                <p className="mb-2">Connect zapier with Feelix.ai </p>
                <a href="#" style={{ textDecoration: "none" }}>
                  Discover
                </a>
              </Col>
              <Col
                md={4}
                style={{
                  border: "2px solid yellow",
                  borderRadius: "10px",
                  position: "relative",
                }}
                className="p-4 px-5"
              >
                <Image
                  src={icon9}
                  style={{
                    height: "30px",
                    position: "absolute",
                    left: "10px",
                    top: "30px",
                  }}
                />
                <h3 className="mb-0">Vitmake</h3>
                <p className="mb-2">Connect Vitmake with Feelix.ai</p>
                <a href="#" style={{ textDecoration: "none" }}>
                  Discover
                </a>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
