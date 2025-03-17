import { Button, Col, Container, Form, Image, Row } from "react-bootstrap";
import Logo from "../../../assets/signup/logo.png";
import dot1 from "../../../assets/signup/dot1.png";
import dot2 from "../../../assets/signup/dot2.png";
// import dot3 from "../../../assets/signup/dot3.png";
import shape1 from "../../../assets/signup/shape1.png";
import shape2 from "../../../assets/signup/shape2.png";
import corner1 from "../../../assets/signup/corner1.png";
import vector from "../../../assets/signup/vector.png";
import background from "../../../assets/signup/background.png";
import outerCircle1 from "../../../assets/signup/outerCircle1.png";
// import outerCircle2 from "../../../assets/signup/outerCircle2.png";

import styles from "./styles.module.css";

const Signup = () => {
  return (
    <Container fluid className={`${styles.mainBg}`}>
      <Image
        src={outerCircle1}
        style={{
          height: "90px",
          position: "absolute",
          top: "0",
          right: "20%",
        }}
      />
      <Row>
        <Col
          lg={5}
          md={5}
          className={`${styles.leftPanel} d-flex align-items-center justify-content-center py-3`}
        >
          <Row className="w-100">
            <Col
              xs={{ span: 12, offset: 0 }}
              sm={{ span: 8, offset: 2 }}
              md={{ span: 12, offset: 0 }}
              lg={{ span: 10, offset: 1 }}
              xl={{ span: 8, offset: 2 }}
              xxl={{ span: 8, offset: 2 }}
            >
              <div>
                {/* Heading Section */}
                <div className="w-100">
                  <h2
                    className="mb-1 text-black"
                    style={{ fontSize: "1.8rem" }}
                  >
                    Create an account
                  </h2>
                  <p className="mb-2 text-black" style={{ fontSize: "0.9rem" }}>
                    Welcome back! Please enter your details
                  </p>
                </div>

                {/* Form Section */}
                <div className="w-100">
                  <Form>
                    <Form.Group>
                      <Form.Label className="small text-black">
                        Full Name
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter your name"
                        style={{ height: "32px" }}
                      />
                    </Form.Group>

                    <Form.Group>
                      <Form.Label className="small text-black">
                        Contact Number
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter your number"
                        style={{ height: "32px" }}
                      />
                    </Form.Group>

                    <Form.Group>
                      <Form.Label className="small text-black">
                        Email
                      </Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter your email"
                        style={{ height: "32px" }}
                      />
                    </Form.Group>

                    <Form.Group>
                      <Form.Label className="small text-black">
                        Password
                      </Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="*******"
                        style={{ height: "32px" }}
                      />
                    </Form.Group>

                    <Form.Group>
                      <Form.Label className="small text-black">
                        Confirm Password
                      </Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="*******"
                        style={{ height: "32px" }}
                      />
                    </Form.Group>

                    <Button className="w-100 mt-2" style={{ height: "34px" }}>
                      Sign up
                    </Button>
                  </Form>
                </div>

                {/* Bottom Text */}
                <div className="px-3 pb-2">
                  <p
                    className="mt-2 mb-0 text-black"
                    style={{ fontSize: "0.85rem" }}
                  >
                    Already have an account? <a href="#">Sign In</a>
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Col>

        <Col
          lg={7}
          md={7}
          style={{
            // border: "4px solid green",
            backgroundColor: "#220C36",
            display: "grid",
            placeItems: "center",
            position: "relative",
          }}
          className={`  ${styles.rightImage}`}
        >
          <Image style={{ color: "white" }} src={Logo} />
          <Image
            src={dot1}
            style={{
              position: "absolute",
              top: 10,
              left: 10,
            }}
          />
          <Image
            src={dot2}
            style={{
              position: "absolute",
              bottom: 10,
              right: 10,
            }}
          />
          <Image
            src={shape1}
            style={{ position: "absolute", top: "0px", left: "180px" }}
          />
          <Image
            src={shape2}
            style={{ position: "absolute", bottom: "0px", right: "180px" }}
          />
          <Image
            src={corner1}
            style={{ position: "absolute", top: "0px", right: "0px" }}
          />
          <Image
            src={vector}
            style={{ position: "absolute", top: "90px", right: "90px" }}
          />
          <Image
            src={background}
            style={{
              position: "absolute",
              top: "-20px",
              right: "0",
              height: "400px",
            }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Signup;
