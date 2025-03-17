import { Container } from "react-bootstrap";
import ChatboatCard from "./components/chatboatcard/ChatboatCard";
import ConnectedApss from "./components/connectedapps/ConnectedApss";
import Connection from "./components/connection/Connection";
import Explore from "./components/exploremore/Explore";
import LineChart from "./components/linegraph/LineChart";
import Product from "./components/product/Product";
import style from "./styles.module.css";

function HomeScreen() {
  return (
    <Container fluid className={`${style.mainContainer}`}>
      <Connection />
      <LineChart />
      <Explore />
      <Product />
      <ChatboatCard />
      <ConnectedApss />
    </Container>
  );
}

export default HomeScreen;
