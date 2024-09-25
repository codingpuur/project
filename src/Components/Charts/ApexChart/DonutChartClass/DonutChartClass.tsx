import { Card, CardBody, Col } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import { DonutChart } from "@/utils/Constant";
import ReactApexChart from "react-apexcharts";
import { apexDonutCharts } from "@/Data/Charts/ApexChartsData";

const DonutChartClass = () => {
  return (
    <Col sm={12} xl={6} className="box-col-6">
      <Card>
        <CommonHeader title={DonutChart} headClass="pb-0"/>
        <CardBody className="apex-chart">
          <div id="donutchart">
            <ReactApexChart
              options={apexDonutCharts}
              series={apexDonutCharts.series}
              type="donut"
            />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default DonutChartClass;
