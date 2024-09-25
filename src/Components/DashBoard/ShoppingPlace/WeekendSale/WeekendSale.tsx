import { Button, Card, CardBody, Col } from "reactstrap";
import { WeekendSaleData } from "@/Data/Dashboard/ShoppingPlace/WeekendSale";
import Image from "next/image";
import { ImagePath } from "@/Constant";

const WeekendSale = () => {
  return (
    <>
      {WeekendSaleData.map((data,index) => (
        <Col xl={4} md={6} sm={12} className="box-col-4" key={index}>
          <Card className="weekend-card">
            <CardBody>
              <Image
                className="w-100 mb-3"
                src={`${ImagePath}/dashboard/${data.image}.png`}
                alt=""
                height={151} width={430}
              />
              <div className="d-flex align-items-center">
                <div className="flex-shrink-0">
                  <span>{data.title}</span>
                  <p>{data.subTitle}</p>
                  <div className="d-flex align-items-center">
                    <h4>{data.star}</h4>
                    <span className="pull-right ms-2">
                      <i className="fa fa-star font-secondary"></i>
                    </span>
                  </div>
                </div>
                <div className="flex-grow-1">
                  <Button color="transperant">{data.btn}</Button>
                  <div className="weekend-price">
                    {data.amount}
                    <del>{data.disAmount}</del>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
      ))}
    </>
  );
};

export default WeekendSale;
