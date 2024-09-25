import { Card, CardBody, CardHeader, Col, Row } from "reactstrap";
import { MonthlyHistorys } from "@/utils/Constant";
import ReactApexChart from "react-apexcharts";
import { monthlyHistoryChart } from "@/Data/Widgets/Chart/WidgetsChart";
import SkillStatus from "./SkillStatus/SkillStatus";
import OrderStatus from "./OrderStatus/OrderStatus";

const MonthlyHistory = () => {
  return (
    <Row>
      <Col md={12} className="box-col-12">
        <Card className="o-hidden">
          <CardHeader>
            <h3>{MonthlyHistorys}</h3>
          </CardHeader>
          <div className="bar-chart-widget">
            <CardBody className="bottom-content">
              <Row>
                <Col xs={12}>
                  <ReactApexChart
                    id="chart-widget4"
                    options={monthlyHistoryChart}
                    series={monthlyHistoryChart.series}
                    type="bar"
                    height={380}
                  />
                </Col>
              </Row>
            </CardBody>
          </div>
        </Card>
      </Col>
      <SkillStatus />
      <OrderStatus />
    </Row>
  );
};

export default MonthlyHistory;
