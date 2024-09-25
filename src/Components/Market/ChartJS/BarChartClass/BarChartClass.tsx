import { Card, CardBody, Col } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import { BarChart } from "@/utils/Constant";
import { Bar } from "react-chartjs-2";
import { barChartData, barChartOptions } from "@/Data/Charts/ChartJsData";

const BarChartClass = () => {
  return (
    <Col xl={6} md={12} className="box-col-12">
      <Card >
        <CommonHeader title={BarChart} headClass="pb-0"/>
        <CardBody className="chart-block">
          <Bar
            data={barChartData}
            options={barChartOptions}
            width={778}
            height={400}
          />
        </CardBody>
      </Card>
    </Col>
  );
};

export default BarChartClass;
