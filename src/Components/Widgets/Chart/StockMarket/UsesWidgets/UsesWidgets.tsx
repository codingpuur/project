import { Card, CardBody, CardHeader, Col, Row } from "reactstrap";
import { Uses } from "@/utils/Constant";
import ReactApexChart from "react-apexcharts";
import { usesChart } from "@/Data/Widgets/Chart/WidgetsChart";

const UsesWidgets = () => {
  return (
    <Col xl={7} lg={12} className="xl-50 box-col-7">
      <div className="small-chart-widget chart-widgets-small">
        <Card>
          <CardHeader>
            <h3>{Uses}</h3>
          </CardHeader>
          <CardBody>
            <div className="chart-container">
              <Row>
                <Col xs={12}>
                  <ReactApexChart
                    id="chart-widget9"
                    options={usesChart}
                    series={usesChart.series}
                    type="bubble"
                    height={320}
                  />
                </Col>
              </Row>
            </div>
          </CardBody>
        </Card>
      </div>
    </Col>
  );
};

export default UsesWidgets;
