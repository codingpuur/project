import { Card, CardBody, Col, Row } from "reactstrap";
import { newOrdersData } from "@/Data/Widgets/General/General";
import SVG from "@/utils/CommonSvgIcon/SVG";
import Orders from "./Orders";

const NewOrders = () => {
  return (
    <Col xxl={5} xl={8} className="box-col-12">
      <Row className="g-sm-3 height-equal-2 widget-charts">
        {newOrdersData.map((data,index) => (
          <Col sm={6} key={index}>
            <Card className="small-widget mb-sm-0">
              <CardBody className={data.color}>
                <span className="f-light">{data.title}</span>
                <div className="d-flex align-items-end gap-1">
                  <h4>{data.number}</h4>
                  <span className={`font-${data.color} f-14 f-w-600`}>
                    <i className={data.icon} />
                    <span>{data.percentage}</span>
                  </span>
                </div>
                <div className="bg-gradient">
                    <SVG iconId={data.svg} className="stroke-icon svg-fill"/>
                </div>
              </CardBody>
            </Card>
          </Col>
        ))}
        <Orders />
      </Row>
    </Col>
  );
};

export default NewOrders;
