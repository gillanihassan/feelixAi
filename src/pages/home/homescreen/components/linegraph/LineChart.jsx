import { Button, Container, Dropdown, DropdownButton } from "react-bootstrap";
import { Chart, registerables } from "chart.js";
import { Line } from "react-chartjs-2";

Chart.register(...registerables);

import style from "./styles.module.css";

const resolveTimeData = {
  labels: [
    "Monday ",
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

function LineChart() {
  return (
    <Container fluid className={`${style.mainContainer} mt-5`}>
      <div className={`${style.mainDiv}`}>
        <div className="d-flex justify-content-end align-items-center gap-2 mt-3">
          <DropdownButton
            variant="secondary"
            title="Weekly"
            id="bg-nested-dropdown"
          >
            <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
            <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
          </DropdownButton>
          <Button className={`${style.customButton}`}>View Dashboard</Button>
        </div>

        <div>
          <Line
            data={resolveTimeData}
            options={lineOption}
            className={`${style.lineChart}`}
          />
        </div>
      </div>
    </Container>
  );
}

export default LineChart;
