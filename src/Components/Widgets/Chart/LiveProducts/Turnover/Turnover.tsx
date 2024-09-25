import { Card, CardBody, CardHeader, Col, Row } from "reactstrap";
import { TurnOver } from "@/utils/Constant";
import ReactApexChart from "react-apexcharts";
import { turnOverChart } from "@/Data/Widgets/Chart/WidgetsChart";

const Turnover = () => {
  return (
    <Col xl={5} lg={12} className='xl-50'>
      <Card>
        <CardHeader>
          <h3>{TurnOver}</h3>
        </CardHeader>
        <CardBody>
          <div className='chart-container'>
            <Row>
              <Col xs={12}>
                <ReactApexChart id='chart-widget7' options={turnOverChart} series={turnOverChart.series} type='area' height={300} />
              </Col>
            </Row>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Turnover;
