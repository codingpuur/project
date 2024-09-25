import { Card, Col, Row } from "reactstrap";
import { saleChartData } from "@/Data/Widgets/Chart/Chart";
import ReactApexChart from "react-apexcharts";

const TotalSaleWidgets = () => {
  return (
    <Row>
      {saleChartData.map((data, index) => (
        <Col xl={4} md={12} className="box-col-4" key={index}>
          <Card className="o-hidden">
            <div className="chart-widget-top">
              <Row className="card-body pb-0 m-0">
                <Col xl={9} lg={8} xs={9} className="p-0">
                  <h3 className="mb-2">{data.title}</h3>
                  <h4>{data.amount}</h4>
                  <span>{data.description}</span>
                </Col>
                <Col xl={3} lg={4} xs={3} className="text-end p-0">
                  <h6 className="txt-success">{data.per}</h6>
                </Col>
              </Row>
              <div>
                <ReactApexChart
                  id={data.id}
                  options={data.chart}
                  series={data.chart.series}
                  type={data.chart.chart?.type}
                  height={200}
                />
              </div>
            </div>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default TotalSaleWidgets;
