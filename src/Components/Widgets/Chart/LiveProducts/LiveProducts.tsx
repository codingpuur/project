import { Card, CardBody, CardHeader, Col, Row } from "reactstrap";
import { LiveProduct } from "@/utils/Constant";
import Turnover from "./Turnover/Turnover";
import CryptocurrencyPrices from "./CryptocurrencyPrices/CryptocurrencyPrices";
import CryptoAnnotations from "./CryptoAnnotations/CryptoAnnotations";
import ReactApexChart from "react-apexcharts";
import { liveProductChart } from "@/Data/Widgets/Chart/WidgetsChart";

const LiveProducts = () => {
  return (
    <Row>
      <Col xl={7} lg={12} className="xl-50">
        <div className="small-chart-widget chart-widgets-small">
          <Card>
            <CardHeader>
              <h3>{LiveProduct}</h3>
            </CardHeader>
            <CardBody>
              <div className="chart-container">
                <Row>
                  <Col xs={12}>
                    <ReactApexChart
                      id="chart-widget6"
                      options={liveProductChart}
                      series={liveProductChart.series}
                      type="area"
                      height={320}
                    />
                  </Col>
                </Row>
              </div>
            </CardBody>
          </Card>
        </div>
      </Col>
      <Turnover />
      <CryptocurrencyPrices />
      <CryptoAnnotations />
    </Row>
  );
};

export default LiveProducts;
