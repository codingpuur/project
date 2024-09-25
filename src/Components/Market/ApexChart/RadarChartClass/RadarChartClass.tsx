import { Card, CardBody, Col } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import { RadarChart } from "@/utils/Constant";
import ReactApexChart from "react-apexcharts";
import { apexRadarPolygonfillCharts } from "@/Data/Charts/ApexChartsData";

const RadarChartClass = () => {
  return (
    <Col sm={12} xl={6} className="box-col-6">
      <Card>
        <CommonHeader title={RadarChart} headClass="pb-0"/>
        <CardBody>
          <div id="radarchart">
            <ReactApexChart
              options={apexRadarPolygonfillCharts}
              series={apexRadarPolygonfillCharts.series}
              type="radar"
              height={350}
            />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default RadarChartClass;
