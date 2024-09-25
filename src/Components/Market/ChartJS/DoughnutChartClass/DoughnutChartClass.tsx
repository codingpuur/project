import { Card, CardBody, Col } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import { DoughnutChart } from "@/utils/Constant";
import { Doughnut } from "react-chartjs-2";
import { doughnutData, doughnutOption } from "@/Data/Charts/ChartJsData";

const DoughnutChartClass = () => {
  return (
    <Col xl={6} md={12} className="box-col-12">
      <Card>
        <CommonHeader title={DoughnutChart} headClass='pb-0'/>
        <CardBody className="chart-block chart-vertical-center">
          <Doughnut
            data={doughnutData}
            options={doughnutOption}
            width={778}
            height={400}
          />
        </CardBody>
      </Card>
    </Col>
  );
};

export default DoughnutChartClass;
