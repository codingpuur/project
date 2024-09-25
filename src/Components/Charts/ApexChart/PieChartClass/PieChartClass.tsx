import { Card, CardBody, Col } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import ReactApexChart from "react-apexcharts";
import { PieChart } from "@/utils/Constant";
import { apexPieChart } from "@/Data/Charts/ApexChartsData";

const PieChartClass = () => {
  return (
    <Col sm={12} xl={6} className="box-col-6">
      <Card>
        <CommonHeader title={PieChart} headClass="pb-0"/>
        <CardBody className="apex-chart">
          <div id="piechart">
            <ReactApexChart
              options={apexPieChart}
              series={apexPieChart.series}
              type="pie"
              width={380}
            />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default PieChartClass;
