import { Container, Row, Col, Card, Table } from "react-bootstrap";
import { Pie, Line, Bar } from "react-chartjs-2";
import style from "./styles.module.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  // 🟢 Pie Chart Data (Customer Emotion Analysis)
  const pieData = {
    labels: ["Neutral", "Neutral", "Neutral", "Neutral", "Neutral"],
    datasets: [
      {
        data: [25, 15, 40, 20],
        backgroundColor: ["#FF5733", "#00C49F", "#6666FF", "#00B81D"],
        hoverBackgroundColor: ["#E74C3C", "#26DDAA", "#4444CC", "#00B81D"],
      },
    ],
  };

  const pieOptions = {
    plugins: {
      legend: {
        display: false, // Hide default legend
      },
      tooltip: {
        enabled: true,
      },
      datalabels: {
        color: "#fff", // White text for visibility
        font: {
          weight: "bold",
          size: 16,
        },
        formatter: (value, ctx) => {
          let total = ctx.chart.data.datasets[0].data.reduce(
            (a, b) => a + b,
            0
          );
          let percentage = ((value / total) * 100).toFixed(0) + "%";
          return percentage; // Show percentage inside pie
        },
      },
    },
  };

  // 🔵 Line Chart Data (Time to Resolve Queries)
  const lineData = {
    labels: ["1", "2", "3", "4"],
    datasets: [
      {
        label: "Resolution Time",
        data: [200, 800, 300, 1000],
        borderColor: "blue",
        fill: false,
        tension: 0.4,
      },
      {
        label: "Response Time",
        data: [150, 500, 250, 900],
        borderColor: "cyan",
        fill: false,
        tension: 0.4,
      },
    ],
  };

  // 🟠 Horizontal Bar Chart Data (Top Keywords)
  const barData = {
    labels: ["4", "", "2", "", "0.5"],
    datasets: [
      {
        label: "Occurrences",
        data: [70, 90, 30, 50, 32],
        backgroundColor: "#17A2B8",
      },
    ],
  };

  return (
    <Container className={`${style.mainContainer} mt-4`} fluid>
      <Row className="g-2">
        <Col md={6}>
          <Card className="p-3">
            <Card.Header as="h5">Customer Emotion Analysis</Card.Header>
            <Row className="d-flex align-items-center h-100">
              {/* Table - Left Side */}
              <Col md={7}>
                <Table striped bordered hover size="sm">
                  <tbody>
                    <tr>
                      <td>Chat 1</td> <td>Neutral</td>
                      <td>Lorem ipsum sit amet</td>
                    </tr>
                    <tr>
                      <td>Chat 1</td> <td>Positive</td>
                      <td>Lorem ipsum sit amet</td>
                    </tr>
                    <tr>
                      <td>Chat 1</td> <td>Negative</td>
                      <td>Lorem ipsum sit amet</td>
                    </tr>
                    <tr>
                      <td>Chat 1</td> <td>Negative</td>
                      <td>Lorem ipsum sit amet</td>
                    </tr>
                    <tr>
                      <td>Chat 1</td> <td>Negative</td>
                      <td>Lorem ipsum sit amet</td>
                    </tr>
                  </tbody>
                </Table>
              </Col>

              {/* Pie Chart - Right Side (Bigger Size) */}
              <Col
                md={5}
                className="d-flex align-items-center justify-content-center mt-1"
              >
                <div style={{ maxWidth: "250px", maxHeight: "220px" }}>
                  <Pie data={pieData} options={pieOptions} />
                </div>
              </Col>
            </Row>
          </Card>
        </Col>

        <Col md={3}>
          <Card>
            <Card.Header as="h5">Time to Resolve Queries</Card.Header>
            <div style={{ height: "250px" }}>
              <Line
                data={lineData}
                options={{ responsive: true, maintainAspectRatio: false }}
              />
            </div>
          </Card>
        </Col>

        <Col md={3}>
          <Card>
            <Card.Header as="h5">Top Keywords</Card.Header>
            <div style={{ height: "250px" }}>
              <Bar
                data={barData}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  indexAxis: "y", // 🛑 Horizontal Bar Chart
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
