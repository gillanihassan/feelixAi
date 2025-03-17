import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import {
  Container,
  Row,
  Col,
  Button,
  ToggleButton,
  ToggleButtonGroup,
} from "react-bootstrap";
import styles from "./styles.module.css";

const timeSlots = [
  { time: "06AM - 07AM", status: "available" },
  { time: "07AM - 08AM", status: "available" },
  { time: "03PM - 04PM", status: "not-available" },
  { time: "10AM - 11AM", status: "available" },
  { time: "12PM - 01PM", status: "available" },
  { time: "05PM - 06PM", status: "available" },
  { time: "06PM - 08PM", status: "not-available" },
  { time: "02PM - 03PM", status: "available" },
];

const CalendarSlot = () => {
  return (
    <Container fluid className={`${styles.calendarContainer} mt-5`}>
      <ToggleButtonGroup type="radio" name="tabs" className="mb-3">
        <ToggleButton
          id="available-slots"
          value={"available"}
          variant="outline-primary"
          className={`${styles.availableSlotButton}`}
        >
          Available slots
        </ToggleButton>
        <ToggleButton
          id="scheduled-slots"
          value={"scheduled"}
          variant="outline-secondary"
          className="text-black "
        >
          Scheduled
        </ToggleButton>
      </ToggleButtonGroup>

      <Row className="g-3">
        <Col md={9} className="p-3 border rounded">
          <h5>Available Time Slots</h5>
          <Calendar className={`${styles.largeCalendar} `} />
        </Col>
        {/* Time Slots Section - md 3 */}
        <Col md={3} className="p-3 border rounded">
          {timeSlots.map((slot, index) => (
            <div
              key={index}
              className={`d-flex justify-content-between align-items-center p-2 border-bottom  border rounded mb-2 ${styles.timeSlot}`}
            >
              <span>{slot.time}</span>
              <span
                style={{
                  backgroundColor:
                    slot.status === "available" ? "#3AC96DE5" : "#FF4C40E5",
                  color: "white",
                  padding: "5px 10px",
                  borderRadius: "10px",
                }}
              >
                {slot.status === "available" ? "Available" : "Not Available"}
              </span>
            </div>
          ))}
        </Col>
      </Row>

      {/* Schedule Button */}
      <Button
        variant="info"
        className="mt-3 text-white"
        style={{ backgroundColor: "#3BC1C5" }}
      >
        Schedule
      </Button>
    </Container>
  );
};

export default CalendarSlot;
