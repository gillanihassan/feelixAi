import { Button, Col, Container, Form, Image, Row } from "react-bootstrap";
import Logo from "../../../assets/images/logo/logo.jpg";
import groupImage from "../../../assets/images/heroimage/Group.png";

import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";
function LoginOne() {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();

    navigate("/dashboard");
  };

  return (
    <Container fluid>
      <Row>
        <Col
          md={7}
          className="p-0 d-none d-sm-block"
          style={{
            background: "#fff",
            height: "100vh",
          }}
        >
          <Image src={Logo} className="ps-3" />
          <div className="align-content-center d-flex justify-content-center">
            <Image src={groupImage} className={`${styles.groupImage}`} />
          </div>
        </Col>
        <Col md={5} className={`${styles.bg} p-0`}>
          <div className={`${styles.loginForm}`}>
            <h1 className={`text-white ${styles.heading}`}>Welcome back</h1>
            <p className={`text-white ${styles.paragraph}`}>
              Welcome back! Please enter your details.
            </p>

            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="text-white">Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="text-white">Password</Form.Label>
                <Form.Control type="password" placeholder="********" />
              </Form.Group>

              <div className="text-end">
                <a href="#">Forgot Password</a>
              </div>

              <Button variant="primary" type="submit" className="w-100">
                SignIn
              </Button>
              <p className="mt-5 text-white">
                Don’t have an account? <a href="">SignUp</a>
              </p>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default LoginOne;
