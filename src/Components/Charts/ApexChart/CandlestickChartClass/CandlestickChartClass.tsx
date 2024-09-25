import { Card, CardBody, Col } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import { CandlestickChart } from "@/utils/Constant";
import ReactApexChart from "react-apexcharts";
import { apexCandleStickCharts } from "@/Data/Charts/ApexChartsData";

const CandlestickChartClass = () => {
  return (
    <Col sm={12} xl={12} className="box-col-12">
      <Card>
        <CommonHeader title={CandlestickChart} headClass="pb-0" />
        <CardBody>
          <div id="candlestick">
            <ReactApexChart
              options={apexCandleStickCharts}
              series={apexCandleStickCharts.series}
              type="candlestick"
              height={350}
            />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default CandlestickChartClass;
