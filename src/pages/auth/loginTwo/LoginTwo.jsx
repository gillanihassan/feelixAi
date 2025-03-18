import { Button, Col, Container, Form, Image, Row } from "react-bootstrap";
import Logo from "../../../assets/signup/logo.png";
// import outerCircle2 from "../../../assets/signup/outerCircle2.png";
import styles from "../loginTwo//styles.module.css";
import { Link } from "react-router";

const LoginTwo = () => {
  return (
    <Container fluid>
      <Row className=" d-flex ">
        <Col
          md={7}
          className={`${styles.colLeft} px-3 d-flex align-items-center justify-content-center`}
        >
          <div className="d-flex flex-column p-5 min-vh-100  justify-content-center">
            <div>
              <h2 className="text-black ">Welcome back</h2>
              <p className="text-black">
                Welcome back! Please enter your details.
              </p>
              <Form>
                <Form.Group className="mb-0">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="*******" />
                </Form.Group>
                <div className="text-end mb-3 ">
                  <a
                    href="#"
                    className={`${styles.textColor} text-decoration-none`}
                  >
                    Forget Password
                  </a>
                </div>
                <Button className={`${styles.buttonBgColor} w-100 mt-2`}>
                  SignIn
                </Button>
              </Form>
            </div>
            <p className="text-black mt-3">
              Don’t have an account?
              <Link to="/signup" className={`${styles.textColor}`}>
                Login
              </Link>
            </p>
          </div>
        </Col>

        <Col
          md={5}
          style={{
            // border: "4px solid green",
            backgroundColor: "#220C36",
            height: "100vh",
            display: "grid",
            placeItems: "center",
            position: "relative",
          }}
          className="px-5"
        >
          <Image style={{ color: "white" }} src={Logo} />
        </Col>
      </Row>
    </Container>
  );
};

export default LoginTwo;
