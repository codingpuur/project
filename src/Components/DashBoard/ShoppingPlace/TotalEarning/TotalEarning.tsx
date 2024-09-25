import { Badge, Card, CardBody, Col, Row } from "reactstrap";
import SVG from "@/utils/CommonSvgIcon/SVG";
import { totalEarningData } from "@/Data/Dashboard/ShoppingPlace/TotalEarning";
import ReactApexChart from "react-apexcharts";

const TotalEarning = () => {
  return (
    <>
      {totalEarningData.map((data,index) => (
        <Col xl={4} lg={6} sm={12} className="box-col-4" key={index}>
          <Card className="total-earning">
            <CardBody>
              <Row>
                <Col sm={7} className="box-col-7">
                  <div className="d-flex">
                    <Badge color="transperant" className={`bg-light-${data.badgeColor} badge-rounded font-primary me-2`}>
                      {data.badge ? data.badge : <SVG iconId={data.svgIcon}/>}
                    </Badge>
                    <div className="flex-grow-1">
                      <h3>{data.title}</h3>
                    </div>
                  </div>
                  <h5>{data.amount}</h5>
                  <p className="d-flex">
                    <span className={`bg-light-${data.color} me-2`}>
                      <SVG iconId={data.icon} />
                    </span>
                    <span className={`font-${data.color} me-2`}>{data.percentage}</span>
                    <span>{data.time}</span>
                  </p>
                </Col>
                <Col sm={5} className={`box-col-5 ${data.chartClass}`}>
                  <ReactApexChart id={data.chartId} options={data.charts} series={data.charts.series} type={data.charts.chart?.type} height={data.charts.chart?.height} />
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      ))}
    </>
  );
};

export default TotalEarning;
