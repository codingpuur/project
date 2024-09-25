import { Card, CardBody, Col } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import ReactApexChart from "react-apexcharts";
import { apexBarChart } from "@/Data/Charts/ApexChartsData";
import { BarChart } from "@/utils/Constant";

const BarChartClass = () => {
  return (
    <Col sm={12} xl={6} className="box-col-6">
      <Card>
        <CommonHeader title={BarChart} headClass='pb-0'/>
        <CardBody>
          <div id="basic-bar">
            <ReactApexChart
              options={apexBarChart}
              series={apexBarChart.series}
              type="bar"
              height={350}
            />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BarChartClass;
