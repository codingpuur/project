import { Card, CardBody, Col } from "reactstrap";
import { ordersAndProfitData } from "@/Data/Widgets/General/General";
import ReactApexChart from "react-apexcharts";

const Orders = () => {
  return (
    <>
      {ordersAndProfitData.map((data,index) => (
        <Col sm={6} key={index}>
          <Card className="widget-1 widget-with-chart mb-xl-0">
            <CardBody>
              <div>
                <h4 className="mb-1">{data.count}</h4>
                <span className="f-light">{data.title}</span>
              </div>
              <div className={`${data.class}-chart`}>
                <ReactApexChart id={data.id} options={data.chart} series={data.chart.series} type={data.chart.chart?.type} height={120}/>
              </div>
            </CardBody>
          </Card>
        </Col>
      ))}
    </>
  );
};

export default Orders;
