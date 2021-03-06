import Widget from "../widget/Widget";
import widgetClasses from "../widget/Widget.module.css";
import imag from './chart.png';

import {useTranslation} from "react-i18next";
import { Card } from "react-bootstrap";
import { Button } from 'react-bootstrap';
import classes from './SalesChartWidget.module.css'


function SalesChartWidget(){
    const t = useTranslation()[0]
return(
    <Widget>
        <Card.Body>
            <Card.Title className={widgetClasses.titleStyle}>{t("salesChartW")}</Card.Title>
            <div className={classes.mainStructure}>
                <div className={'image'} style={{ width: '250px' }}>
                  <img src={imag} style={{ height: '170px', width: '250px', paddingLeft: '25px', display: 'flex' }} />
                </div>
              <div className={'chart-but'} >
                <div className>{t("salesChartWidget.select")}</div>
                <Button>{t("salesChartWidget.ld")}</Button>
                <Button>{t("salesChartWidget.lw")}</Button>
                <Button>{t("salesChartWidget.lm")}</Button>
              </div>
            </div>
        </Card.Body>
    </Widget>
)
}
export default SalesChartWidget;