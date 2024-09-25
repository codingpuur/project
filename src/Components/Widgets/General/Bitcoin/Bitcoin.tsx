import { Card, CardBody, Col } from "reactstrap";
import { bitcoinData } from "@/Data/Widgets/General/General";
import SVG from "@/utils/CommonSvgIcon/SVG";
import ReactApexChart from "react-apexcharts";

const Bitcoin = () => {
  return (
    <>
      {bitcoinData.map((data,index) => (
        <Col sm={4} xxl={2} key={index}>
          <div className={`currency-widget ${data.class} height-equal widget-currency`}>
            <div className="d-flex">
              <div className="currency-icon-widget">
                <SVG iconId={data.svg}/>
              </div>
              <div>
                <h6>
                  {data.title}<span className="f-light">{data.titleSub}</span>
                </h6>
              </div>
            </div>
            <Card>
              <CardBody>
                <div className="currency-chart-wrap">
                  <ReactApexChart id={data.chartId} options={data.chart} series={data.chart.series} type="line" height="100" />
                </div>
              </CardBody>
            </Card>
          </div>
        </Col>
      ))}
    </>
  );
};

export default Bitcoin;
