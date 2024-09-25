import { Card, CardBody, Col } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import { RadialBarChart } from "@/utils/Constant";
import ReactApexChart from "react-apexcharts";
import { apexRadialBarChart } from "@/Data/Charts/ApexChartsData";

const RadialBarChartClass = () => {
  return (
    <Col sm={12} xl={6} className="box-col-6">
      <Card>
        <CommonHeader title={RadialBarChart} headClass="pb-0" />
        <CardBody>
          <div id="circlechart">
            <ReactApexChart
              options={apexRadialBarChart}
              series={apexRadialBarChart.series}
              type="radialBar"
              height={380}
            />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default RadialBarChartClass;
