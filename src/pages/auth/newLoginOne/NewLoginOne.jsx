import { Button, Col, Container, Form, Image, Row } from "react-bootstrap";
import outerCircle1 from "../../../assets/signup/outerCircle1.png";
import groupImage from "../../../assets/images/heroimage/Group.png";
import Logo from "../../../assets/images/logo/logo.jpg";

import styles from "./styles.module.css";
import { NavLink } from "react-router-dom";

const NewLoginOne = () => {
  return (
    <Container fluid className={`${styles.mainBg}`}>
      <Image src={outerCircle1} className={`${styles.outerCircleOne}`} />
      <Row>
        <Col
          md={6}
          className="p-0 d-none d-sm-block"
          style={{
            background: "#fff",
            borderRadius: "10px",
          }}
        >
          <Image src={Logo} className={`${styles.customLogo}`} />
          <div className="align-content-center d-flex justify-content-center">
            <Image src={groupImage} className={`${styles.groupImage}`} />
          </div>
        </Col>

        <Col lg={6} md={6} className={`${styles.customColumn}`}>
          <div className={`${styles.loginForm}`}>
            <Form className={`${styles.customForm}`}>
              <h1 className={`${styles.heading}`}>Welcome back</h1>
              <p className={`${styles.paragraph}`}>
                Welcome back! Please enter your details.
              </p>
              <Form.Group
                className={`${styles.customFormGroup} mb-3`}
                controlId="formBasicEmail"
              >
                <Form.Label className="text-black">Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>

              <Form.Group
                className={`${styles.customFormGroup}`}
                controlId="formBasicEmail"
              >
                <Form.Label className="text-black">Password</Form.Label>
                <Form.Control type="password" placeholder="********" />
              </Form.Group>

              <div className={`${styles.customFormGroup} mb-3 mt-4 text-end`}>
                <a
                  href="#"
                  className={`${styles.customAnchorOne} text-decoration-none`}
                >
                  Forgot Password
                </a>
              </div>

              <Button type="submit" className={`${styles.customButton} `}>
                SignIn
              </Button>
              <p className={` ${styles.customPara} mt-4 text-center`}>
                Don’t have an account?
                <NavLink to="/signup" className={`${styles.customAnchor}`}>
                  SignUp
                </NavLink>
              </p>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default NewLoginOne;
