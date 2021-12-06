import { StyledDashboard } from "./Dashboard.styled";

import TopNavBar from "../components/layout/navbar/TopNavBar";
import OrdersWidget from "../components/ordersWidget/OrdersWidget";
import OffersRankingWidget from "../components/rankingWidget/OffersRankingWidget";
import { useTranslation } from "react-i18next";
import DailyTipsWidget from "../components/dailyTipsWidget/DailyTipsWidget";
import SalesQualityWidget from "../components/salesQualityWidget/SalesQualityWidget";

import Footer from "../components/layout/footer/Footer";
import { FooterStyled } from "../components/layout/footer/Footer.styled";
import { Container, Row, Col } from "react-bootstrap";
import classes from "./Dashboard.module.css";

function Dashboard(props) {
  const { t, i18n } = useTranslation();

  return (
    <div>
      <StyledDashboard>
        <Container className={classes.mainStructure}>
          <Row>
            <Col>
              <OrdersWidget />
            </Col>
            <Col>
              <DailyTipsWidget />
            </Col>
            <Col>
              
              <SalesQualityWidget />
            </Col>
          </Row>

          <Col>
            <Row style={{ rowGap: "20px" }}>
              <DailyTipsWidget />
              <SalesQualityWidget />
            </Row>
          </Col>
          {/* <OffersRankingWidget/> */}
        </Container>
      </StyledDashboard>
      <Footer />
    </div>
  );
}
export default Dashboard;
