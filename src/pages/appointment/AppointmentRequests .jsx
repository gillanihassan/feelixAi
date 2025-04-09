import { Table, Button, Form, Pagination } from "react-bootstrap";
// import { Search, Filter } from "lucide-react";

const AppointmentRequests = () => {
  return (
    <div className="container mt-4">
      {/* Tabs */}
      <div className="d-flex align-items-center mb-3">
        <Button variant="outline-secondary" className="me-2">
          Available slots
        </Button>
        <Button variant="outline-secondary" className="me-2">
          Scheduled
        </Button>
        <Button variant="primary">Requests</Button>
      </div>

      {/* Filter & Search */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div>
          <Button variant="primary" className="me-2">
            All (250)
          </Button>
          <Button variant="outline-secondary" className="me-2">
            Accepted
          </Button>
          <Button variant="outline-secondary">Rejected</Button>
        </div>
        <div className="d-flex align-items-center">
          <Form.Control
            type="text"
            placeholder="Search here"
            className="me-2"
          />
          <Button variant="outline-secondary">
            {/* <Search size={16} /> */}
          </Button>
          <Button variant="outline-secondary" className="ms-2">
            {/* <Filter size={16} /> Filter */}
          </Button>
        </div>
      </div>

      {/* Table */}
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>
              <Form.Check type="checkbox" />
            </th>
            <th>Appointment #</th>
            <th>Customer</th>
            <th>Description</th>
            <th>Date</th>
            <th>Time</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {[...Array(10)].map((_, index) => (
            <tr key={index}>
              <td>
                <Form.Check type="checkbox" />
              </td>
              <td>#306{index}</td>
              <td>Customer {index}</td>
              <td>Lorem ipsum is dummy text...</td>
              <td>Jan 2, 2022</td>
              <td>01:00PM - 02:00PM</td>
              <td>
                <Button variant="outline-danger" className="me-2">
                  Reject
                </Button>
                <Button variant="outline-success">Accept</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Pagination */}
      <Pagination className="justify-content-center">
        <Pagination.Prev>Previous</Pagination.Prev>
        {[1, 2, 3, 4, 5, 9, 10].map((num) => (
          <Pagination.Item key={num} active={num === 1}>
            {num}
          </Pagination.Item>
        ))}
        <Pagination.Next>Next</Pagination.Next>
      </Pagination>
    </div>
  );
};

export default AppointmentRequests;
