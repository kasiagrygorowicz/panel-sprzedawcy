import { StyledDashboard } from "./Dashboard.styled";

import TopNavBar from "../components/layout/navbar/TopNavBar";


import { useTranslation } from "react-i18next";
import DailyTipsWidget from "../components/widget/dailyTipsWidget/DailyTipsWidget";


import Footer from "../components/layout/footer/Footer";
import { FooterStyled } from "../components/layout/footer/Footer.styled";
import { Container, Row, Col } from "react-bootstrap";
import classes from "./Dashboard.module.css";
import SalesQualityWidget from "../components/widget/salesQualityWidget/SalesQualityWidget";
import OrdersWidget from "../components/widget/ordersWidget/OrdersWidget";

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
