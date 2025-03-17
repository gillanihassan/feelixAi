import { Image, Nav } from "react-bootstrap";
import { useState } from "react";
import Logo from "../../assets/images/sidebar/Logo.png";
import HomeLogo from "../../assets/images/sidebar/Home.png";
import Dashboard from "../../assets/images/sidebar/Dashboard.png";
import Settings from "../../assets/images/sidebar/Settings.png";
import Chatbot from "../../assets/images/sidebar/Chatbot.png";
import Vector from "../../assets/images/sidebar/Vector.png";
import expand from "../../assets/images/sidebar/expand.png";
import questionMark from "../../assets/images/sidebar/questionMark.png";
import Switch from "../../assets/images/sidebar/Switch.png";
import Notification from "../../assets/images/sidebar/Notification.png";
import Profile from "../../assets/images/sidebar/Profile.png";

const SidebarTwo = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="app-container d-flex">
      {/* Sidebar (Fixed Left) */}
      <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
        <Nav className="flex-column p-3 ">
          {/* Sidebar Heading (Moved Down) */}
          <h4 className="text-white text-center mt-auto">
            <Image src={Logo} />
          </h4>

          {/* Sidebar Links */}
          <Nav.Link href="#" className="text-white">
            <Image src={HomeLogo} />
          </Nav.Link>
          <Nav.Link href="#" className="text-white">
            <Image src={Dashboard} />
          </Nav.Link>
          <Nav.Link href="#" className="text-white">
            <Image src={Settings} />
          </Nav.Link>
          <Nav.Link href="#" className="text-white">
            <Image src={Chatbot} />
          </Nav.Link>
          <Nav.Link href="#" className="text-white">
            <Image src={Vector} />
          </Nav.Link>

          <Nav.Link href="#" className="text-white mt-5 pt-0">
            {/* Toggle Button */}
            <div className="toggle-btn text-white" onClick={toggleSidebar}>
              <Image src={expand} />
            </div>
          </Nav.Link>
          <Nav.Link href="#" className="text-white">
            <Image src={questionMark} />
          </Nav.Link>
          <Nav.Link href="#" className="text-white">
            <Image src={Switch} />
          </Nav.Link>
        </Nav>
      </div>

      {/* Main Section (Topbar + Content) */}
      <div className="main-section">
        {/* Topbar (After Sidebar) */}
        <div className="topbar d-flex justify-content-between align-items-center px-3">
          <h4 className="text-black m-0">Configure Chatbot </h4>
          <div>
            <a href="#" className="text-white me-3">
              <Image src={Notification} />
            </a>
            <a href="#" className="text-white">
              <Image src={Profile} />
            </a>
          </div>
        </div>

        {/* Content */}
        {/* <div className="content">
          <h2>Welcome to Dashboard</h2>
          <p>This is the main content area.</p>
        </div> */}
      </div>

      {/* CSS Styles */}
      <style>{`
        .app-container {
          height: 100vh;
        }
        .sidebar {
          width: ${isOpen ? "200px" : "90px"};
          height: 100vh;
          background: rgb(255, 255, 255);
          color: white;
          transition: width 0.3s ease-in-out;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          align-items: ${isOpen ? "flex-start" : "center"};
          position: fixed;
          left: 0;
          top: 0;
        }
        .sidebar .nav-link {
          display: flex;
          align-items: center;
          padding: 10px;
          justify-content: ${isOpen ? "flex-start" : "center"};
        }
        .toggle-btn {
          font-size: 24px;
          cursor: pointer;
          padding: 10px;
          text-align: center;
        }
        .main-section {
          margin-left: ${isOpen ? "200px" : "90px"};
          width: calc(100% - ${isOpen ? "200px" : "90px"});
          transition: margin-left 0.3s ease-in-out;
        }
        .topbar {
          height: 50px;
          background: rgb(255, 255, 255);
          color: white;
          display: flex;
          align-items: center;
          width: 100%;
        }
        .content {
          padding: 20px;
          flex-grow: 1;
        }
      `}</style>
    </div>
  );
};

export default SidebarTwo;
