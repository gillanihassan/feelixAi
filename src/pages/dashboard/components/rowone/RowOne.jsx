import { Container, Row, Col, Form, Card } from "react-bootstrap";
import { Line, Bar } from "react-chartjs-2";
import style from "./styles.module.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  // First Line Chart Data
  const lineData1 = {
    labels: ["March 2024", "March 2024", "March 2024", "March 2024"],
    datasets: [
      {
        label: "Query Resolution Time 1",
        data: [100, 500, 300, 900],
        borderColor: "orange",
        fill: false,
        tension: 0.4,
      },
      {
        label: "Query Resolution Time 2",
        data: [200, 400, 250, 800],
        borderColor: "purple",
        fill: false,
        tension: 0.4,
      },
    ],
  };

  // Second Line Chart Data (for Third Column)
  const lineData2 = {
    labels: ["1", "2", "3"],
    datasets: [
      {
        data: [5, 3, 6, 2, 8, 4],
        fill: false,
        tension: 0.3,
      },
    ],
  };

  const barData = {
    labels: ["0", "", "50", "", "100"],
    datasets: [
      {
        label: "Ratings",
        data: [40, 60, 30, 10, 33],
        backgroundColor: [
          "rgb(0, 184, 29)",
          "rgb(180, 58, 69)",
          "rgb(22, 197, 244)",
          "rgb(22, 93, 255)",
          "rgb(217, 109, 0)",
        ],
      },
    ],
  };

  return (
    <Container fluid className={`${style.mainContainer}`}>
      <Row className={`${style.customRow} my-3`}>
        <Col md={3}>
          <Form.Control type="text" placeholder="Search" />
        </Col>
        <Col md={2}>
          <Form.Control type="text" placeholder="Chat ID: #21" readOnly />
        </Col>
      </Row>
      <Row className="g-2">
        {/* First Line Chart */}
        <Col md={6} className="d-flex align-items-stretch">
          <Card className={` ${style.mainCard} p-2 w-100 d-flex flex-column `}>
            <Card.Header as="h5">Customer Sentiment Trend</Card.Header>
            <div className={`${style.mainDiv}`}>
              <Line
                data={lineData1}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  // layout: { padding: 10 },
                }}
              />
            </div>
          </Card>
        </Col>

        {/* Bar Chart in Second Column */}
        <Col md={3} className={`${style.mainCard} d-flex align-items-stretch`}>
          <Card className={` ${style.mainCard} p-2 w-100 d-flex flex-column `}>
            <Card.Header as="h5">Chat Rating Distribution</Card.Header>
            <div className={`${style.mainDiv}`}>
              <Bar
                data={barData}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  // layout: { padding: 10 },
                }}
              />
            </div>
          </Card>
        </Col>

        {/* Second Line Chart (Different Look) in Third Column */}
        <Col md={3} className={`${style.mainCard} d-flex align-items-stretch`}>
          <Card className={` ${style.mainCard} p-2 w-100 d-flex flex-column `}>
            <Card.Header as="h5">Time to Resolve Queries</Card.Header>
            <div className={`${style.mainDiv}`}>
              <Line
                data={lineData2}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  layout: { padding: 10 },
                }}
              />
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
