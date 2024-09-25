import { Card, CardBody, CardHeader, Col, Row } from "reactstrap";
import { StockMarkets } from "@/utils/Constant";
import ReactApexChart from "react-apexcharts";
import { stockMarketChart } from "@/Data/Widgets/Chart/WidgetsChart";
import Finance from "./Finance/Finance";
import OrderStatusWidgets from "./OrderStatusWidgets/OrderStatusWidgets";
import MonthlySales from "./MonthlySales/MonthlySales";
import UsesWidgets from "./UsesWidgets/UsesWidgets";

const StockMarket = () => {
  return (
    <Row>
      <Col sm={12} className="box-col-12">
        <div className="donut-chart-widget">
          <Card>
            <CardHeader>
              <h3>{StockMarkets}</h3>
            </CardHeader>
            <CardBody>
              <ReactApexChart id="chart-widget13" options={stockMarketChart} series={stockMarketChart.series} type="line" height={450} />
            </CardBody>
          </Card>
        </div>
      </Col>
      <Finance />
      <OrderStatusWidgets />
      <MonthlySales />
      <UsesWidgets />
    </Row>
  );
};

export default StockMarket;
