import { Row, Col, Card, Container } from "react-bootstrap";
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

// Register Chart.js components
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
  // Line Chart Data
  const lineData = {
    labels: ["1", "2", "3", "4"],
    datasets: [
      {
        label: "Keyword 1",
        data: [100, 500, 300, 900],
        borderColor: "blue",
        fill: false,
        tension: 0.4,
      },
      {
        label: "Keyword 2",
        data: [200, 400, 250, 800],
        borderColor: "cyan",
        fill: false,
        tension: 0.4,
      },
    ],
  };

  // Bar Chart Data (Horizontal)
  const barData = {
    labels: ["4", "", "2", "", "0.5"],
    datasets: [
      {
        label: "Frequency",
        data: [70, 30, 80, 60, 18],
        backgroundColor: "#656EF8", // Purple color
      },
    ],
  };

  const barOptions = {
    indexAxis: "y",
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        beginAtZero: true,
        ticks: {
          callback: function (value) {
            if (value === 0) return "0";
            if (value === 50) return "50";
            if (value == 100) return "100";
          },
        },
      },
    },
  };

  return (
    <Container fluid className={`${style.mainContainer}`}>
      <Row className="mt-3">
        <Col md={6}>
          <Card className="p-3 w-100">
            <Card.Header as="h5">Keyword Graph</Card.Header>
            <div style={{ width: "100%", height: "250px" }}>
              {/* Full Width Graph Container */}
              <Line
                data={lineData}
                options={{ responsive: true, maintainAspectRatio: false }}
              />
            </div>
          </Card>
        </Col>

        <Col md={6}>
          <Card className="p-3">
            <Card.Header as="h5">Types of Customer Queries</Card.Header>
            <div style={{ height: "250px" }}>
              <Bar data={barData} options={barOptions} />
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
