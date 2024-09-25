import { Card, CardBody, Col, Row } from "reactstrap";
import { saleRevenueData } from "@/Data/Dashboard/CRM/SaleAndRevenue";
import SVG from "@/utils/CommonSvgIcon/SVG";

const SaleAndRevenue = () => {
  return (
    <Col xl={12}>
      <Card className="widget-sell">
        <CardBody className="pb-0">
          <Row>
            {saleRevenueData.map((data,index) => (
              <Col xl={3} lg={3} sm={6} className="box-col-3 mb-3" key={index}>
                <div className="sale">
                  <h3>{data.title}</h3>
                  <h5>{data.count}</h5>
                  <p className="d-flex">
                    <span className={`bg-light-${data.color} me-2`}>
                        <SVG iconId={data.svgIcon}/>
                    </span>
                    <span className={`font-${data.color}`}>{data.percentage}</span>
                  </p>
                  <span className="sale-title">{data.time}</span>
                </div>
              </Col>
            ))}
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default SaleAndRevenue;
