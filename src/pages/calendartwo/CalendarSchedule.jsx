import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import {
  Container,
  Row,
  Col,
  ToggleButton,
  ToggleButtonGroup,
  Card,
} from "react-bootstrap";
import styles from "./styles.module.css";

const scheduledEvents = [
  {
    title: "Real State Hub",
    location: " Phase 4 Lower Mall, Newyork",
    date: "25 August, Tue",
    time: "03:00PM - 04:00PM",
  },
  {
    title: "Real State Hub",
    location: " Phase 4 Lower Mall, Newyork",
    date: "25 August, Tue",
    time: "03:00PM - 04:00PM",
  },
  {
    title: "Real State Hub",
    location: " Phase 4 Lower Mall, Newyork",
    date: "25 August, Tue",
    time: "03:00PM - 04:00PM",
  },
];

const CalendarSchedule = () => {
  return (
    <Container className={`${styles.mainContainer}`}>
      {/* Toggle Buttons */}
      <ToggleButtonGroup type="radio" name="tabs" className="mb-3">
        <ToggleButton
          id="available-slots"
          value="available"
          variant="outline-secondary"
          style={{ borderColor: "gray" }}
        >
          Available slots
        </ToggleButton>
        <ToggleButton
          id="scheduled-slots"
          value="scheduled"
          style={{ backgroundColor: "#3BC1C5", border: "none" }}
        >
          Scheduled
        </ToggleButton>
      </ToggleButtonGroup>

      <Row className="g-5">
        {/* Calendar Section */}
        <Col md={12} className="p-3 border rounded w-100">
          <h5>Scheduled</h5>
          <Calendar
            className={`d-flex flex-column w-100 ${styles.largeCalendar}`}
          />
        </Col>

        {/* Scheduled List Section */}
        <Col md={12} className="mt-3">
          {scheduledEvents.map((event, index) => (
            <Card
              key={index}
              className={`p-3 border rounded mb-3 ${styles.scheduledCard}`}
            >
              <h6 className="mb-1">{event.title}</h6>
              <p className="mb-1 text-muted">{event.location}</p>
              <strong>{event.date}</strong>
              <span className="float-end text-muted">{event.time}</span>
            </Card>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default CalendarSchedule;
