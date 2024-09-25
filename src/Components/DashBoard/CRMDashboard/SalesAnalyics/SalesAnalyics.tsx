import { Card, CardBody, CardHeader, Col, Row } from "reactstrap";
import { SalesAnalyic } from "@/utils/Constant";
import ReactApexChart from "react-apexcharts";
import { salesAnalyicsChart } from "@/Data/Dashboard/CRM/ChartData";
import SaleAndRevenue from "./SaleAndRevenue";

const SalesAnalyics = () => {
  return (
    <Col xl={7}>
      <Row>
        <Col xl={12}>
          <Card>
            <CardHeader className='pb-0'>
              <div className='header-top'>
                <h3 className='m-0'>{SalesAnalyic}</h3>
              </div>
            </CardHeader>
            <CardBody>
              <ReactApexChart id='company-viewchart' options={salesAnalyicsChart} series={salesAnalyicsChart.series} type='line' height={435} />
            </CardBody>
          </Card>
        </Col>
        <SaleAndRevenue />
      </Row>
    </Col>
  );
};

export default SalesAnalyics;
