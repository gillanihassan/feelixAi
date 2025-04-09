import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import LoginOne from "../pages/auth/loginOne/LoginOne";
import NewLoginOne from "../pages/auth/newLoginOne/NewLoginOne";
import Signup from "../pages/auth/signup/Signup";
import LoginTwo from "../pages/auth/loginTwo/LoginTwo";
import Home from "../pages/home/Home";
import HomeTwo from "../pages/home/homeTwo/HomeTwo";
import Chatbot from "../pages/chatbot/Chat";
import Header from "../layouts/navbar";
import HomeScreen from "../pages/home/homescreen/HomeScreen";
import Dashboard from "../pages/dashboard/Dashboard";
import DashboardOne from "../pages/dashboardone/DashboardOne";
import Calendar from "../pages/calender/Calendar";
import CalendarSchedule from "../pages/calendartwo/CalendarSchedule";
import ChatbotTwo from "../pages/chatbotTwo/ChatbotTwo";
import ChatbotThree from "../pages/chatbotThree/ChatbotThree";
import AppointmentRequests from "../pages/appointment/AppointmentRequests ";

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path="/old" element={<LoginOne />} />
        <Route path="/" element={<NewLoginOne />} />
        <Route path="/home" element={<Home />} />
        <Route path="/logintwo" element={<LoginTwo />} />
        <Route path="hometwo" element={<HomeTwo />} />
        <Route path="/signup" element={<Signup />} />
        {/* <Route path="/loginthree" element={<LoginThree />} /> */}

        <Route
          path="/chatbot"
          element={
            <div>
              <Header>
                <Chatbot />
              </Header>
            </div>
          }
        />
        <Route
          path="/chatbot-two"
          element={
            <div>
              <Header>
                <ChatbotTwo />
              </Header>
            </div>
          }
        />
        <Route
          path="/chatbot-three"
          element={
            <div>
              <Header>
                <ChatbotThree />
              </Header>
            </div>
          }
        />
        <Route
          path="/homescreen"
          element={
            <div>
              <Header>
                <HomeScreen />
              </Header>
            </div>
          }
        />
        <Route
          path="/dashboard"
          element={
            <div>
              <Header>
                <Dashboard />
              </Header>
            </div>
          }
        />
        <Route
          path="/dashboard-one"
          element={
            <div>
              <Header>
                <DashboardOne />
              </Header>
            </div>
          }
        />
        <Route
          path="/calendar"
          element={
            <div>
              <Header>
                <Calendar />
              </Header>
            </div>
          }
        />
        <Route
          path="/calendar-schedule"
          element={
            <div>
              <Header>
                <CalendarSchedule />
              </Header>
            </div>
          }
        />
        <Route
          path="/appointment-requests"
          element={
            <div>
              <Header>
                <AppointmentRequests />
              </Header>
            </div>
          }
        />
      </Routes>
    </Router>
  );
};

export default Routing;
