import { Card, CardBody, Col } from "reactstrap";
import FeatherIcons from "@/utils/CommonSvgIcon/FeatherIcons";
import { averagePerDayData } from "@/Data/Widgets/General/General";
import ReactApexChart from "react-apexcharts";

const AverageSales = () => {
  return (
    <>
      {averagePerDayData.map((data,index) => (
        <Col xxl={3} sm={6} key={index}>
          <Card>
            <CardBody className="radial-progress-card">
              <div>
                <h6 className="mb-0">{data.header}</h6>
                <div className="sale-details">
                  <h5 className={`font-primary mb-0`}>{data.count}</h5>
                  <span className="f-14 f-light f-w-600">
                    <FeatherIcons iconName="ArrowUp" />
                    {data.per}
                  </span>
                </div>
                <p className="f-light"> {data.description}</p>
              </div>
              <div className="radial-chart-wrap">
                <ReactApexChart
                  id={data.id}
                  options={data.chart}
                  series={data.chart.series}
                  type="radialBar"
                  height="150"
                />
              </div>
            </CardBody>
          </Card>
        </Col>
      ))}
    </>
  );
};

export default AverageSales;
