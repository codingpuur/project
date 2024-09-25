import { Card, CardBody, Col } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import { LineChart2 } from "@/utils/Constant";
import { Line } from "react-chartjs-2";
import { lineChart2Data, lineChart2Option } from "@/Data/Charts/ChartJsData";

const LineChart2Class = () => {
  return (
    <Col xl={6} md={12} className="box-col-12">
      <Card>
        <CommonHeader title={LineChart2} headClass='pb-0'/>
        <CardBody className="chart-block">
          <Line
            data={lineChart2Data}
            options={lineChart2Option}
            width={778}
            height={400}
          />
        </CardBody>
      </Card>
    </Col>
  );
};

export default LineChart2Class;
