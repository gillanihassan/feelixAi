import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";

import Logo from "../assets/images/sidebar/Logo.png";
import HomeLogo from "../assets/images/sidebar/Home.png";
import Dashboard from "../assets/images/sidebar/Dashboard.png";
import Settings from "../assets/images/sidebar/Settings.png";
import Chatbot from "../assets/images/sidebar/Chatbot.png";
import Vector from "../assets/images/sidebar/Vector.png";
import { Image } from "react-bootstrap";
import style from "./style.module.css";
import { Link } from "react-router-dom";

function Header({ children }) {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="bg-body-tertiary"
        style={{ marginLeft: "100px" }}
        sticky="top"
      >
        <Container fluid>
          {/* <Navbar.Brand href="#home">FeelixAi</Navbar.Brand> */}
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Welcome Hassan</Nav.Link>
            </Nav>
            <Nav>
              <div
                style={{
                  width: "30px",
                  height: "30px",
                  background: "#000",
                  borderRadius: "50%",
                }}
              ></div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className={`${style.sidebar}`}>
        <Link to={"#"} style={{ marginLeft: "10px" }}>
          <Image src={Logo} />
        </Link>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <ul>
            <li>
              <Link to={"/homescreen"}>
                <Image src={HomeLogo} />
              </Link>
            </li>

            <li>
              <Link to={"/dashboard"}>
                <Image src={Dashboard} />
              </Link>
            </li>

            <li>
              <Link to={"#"}>
                <Image src={Settings} />
              </Link>
            </li>

            <li>
              <Link to={"/chatbot"}>
                <Image src={Chatbot} />
              </Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to={"/calendar-schedule"}>
                <Image src={Vector} />
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {children}
    </>
  );
}

export default Header;
