import { Card, CardBody, Col } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import { ColumnChart } from "@/utils/Constant";
import ReactApexChart from "react-apexcharts";
import { apexLineWithAnnotationCharts } from "@/Data/Charts/ApexChartsData";

const ApexLineChartClass = () => {
  return (
    <Col sm={12}>
      <Card>
        <CommonHeader title={ColumnChart} headClass="pb-0"/>
        <CardBody>
          <div id="annotationchart">
            <ReactApexChart
              options={apexLineWithAnnotationCharts}
              series={apexLineWithAnnotationCharts.series}
              type="line"
              height={350}
            />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ApexLineChartClass;
