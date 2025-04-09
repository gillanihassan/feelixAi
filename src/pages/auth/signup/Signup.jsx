import { Button, Col, Container, Form, Image, Row } from "react-bootstrap";
import Logo from "../../../assets/signup/logo.png";
import LogoRes from "../../../assets/images/logo/logo.jpg";
import dot1 from "../../../assets/signup/dot1.png";
import dot2 from "../../../assets/signup/dot2.png";
// import dot3 from "../../../assets/signup/dot3.png";
import shape1 from "../../../assets/signup/shape1.png";
import shape2 from "../../../assets/signup/shape2.png";
import corner1 from "../../../assets/signup/corner1.png";
import vector from "../../../assets/signup/vector.png";
import background from "../../../assets/signup/background.png";
import outerCircle1 from "../../../assets/signup/outerCircle1.png";

import styles from "./styles.module.css";
import { NavLink } from "react-router-dom";

const Signup = () => {
  return (
    <Container fluid className={`${styles.mainBg}`}>
      <Image src={outerCircle1} className={`${styles.outerCircleOne}`} />
      <Row>
        <Col
          lg={6}
          md={6}
          sm={6}
          xs={12}
          className={`${styles.leftPanel} d-flex justify-content-center align-items-center`}
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
              <div className={`${styles.contentContainer}`}>
                <div className="w-100">
                  <Image src={LogoRes} className={`${styles.logoRes}`} />
                  <p
                    className="mb-1 text-black"
                    style={{ fontSize: "30px", fontWeight: "600" }}
                  >
                    Create an account
                  </p>
                  <p
                    className="mb-2"
                    style={{
                      fontSize: "16px",
                      fontWeight: "400",
                      lineHeight: "24px",
                      color: "#475467",
                    }}
                  >
                    Welcome! Please enter your details.
                  </p>
                </div>

                {/* Form Section */}
                <div className="mt-4">
                  <Form>
                    <Form.Group className="mb-4">
                      <Form.Label> Full Name</Form.Label>
                      <Form.Control type="text" placeholder="Enter your name" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label> Contact Number</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter your number"
                      />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label> Email</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter your email"
                      />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label> Password</Form.Label>
                      <Form.Control type="password" placeholder="*******" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label> Confirm Password</Form.Label>
                      <Form.Control type="password" placeholder="*******" />
                    </Form.Group>

                    <Button className={`${styles.customButton} w-100 mt-2`}>
                      Sign up
                    </Button>
                  </Form>
                </div>

                {/* Bottom Text */}
                <div className="text-center mt-4">
                  <p
                    className="mt-2 mb-0"
                    style={{
                      fontSize: "14px",
                      fontWeight: "400",
                      color: "#475467",
                    }}
                  >
                    Already have an account?
                    <NavLink
                      to="/"
                      className={`${styles.customLink} text-decoration-none`}
                    >
                      Signin
                    </NavLink>
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Col>

        <Col
          lg={6}
          md={6}
          sm={6}
          xs={12}
          style={{
            backgroundColor: "#220C36",
            display: "grid",
            placeItems: "center",
            position: "relative",
          }}
          className={`${styles.rightPanel} d-none d-sm-block`}
        >
          <Image
            style={{
              color: "white",
              position: "absolute",
              top: "50%",
              left: "50%",
            }}
            src={Logo}
          />
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
