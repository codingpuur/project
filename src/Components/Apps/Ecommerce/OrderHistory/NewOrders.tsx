import { Button, Card, CardBody, Col, Row } from "reactstrap";
import { orderData } from "@/Data/Apps/Ecommerce/OrderHistoryData";
import FeatherIcons from "@/utils/CommonSvgIcon/FeatherIcons";
import { Href } from "@/utils/Constant";
import CommonHeader from "@/Common/CommonHeader";
import CommonRating from "./CommonRating";
import Image from "next/image";
import { ImagePath } from "@/Constant";
import Link from "next/link";

const NewOrders = () => {
  return (
    <Col sm={12}>
      {orderData.map((data, index) => (
        <Card key={index}>
          <CommonHeader title={data.header} />
          <CardBody>
            <Row className='g-sm-4 g-3'>
              {data.newOrderData.map((item, index) => (
                <Col xxl={4} md={6} key={index}>
                  <div className='prooduct-details-box'>
                    <div className='d-flex'>
                      <Image className='align-self-center img-fluid img-60' src={`${ImagePath}/${item.img}`} alt='#' height={60} width={60}/>
                      <div className='flex-grow-1 ms-3'>
                        <div className='product-name'>
                          <h6>
                            <Link href={Href}>{item.name}</Link>
                          </h6>
                        </div>
                        <CommonRating />
                        <div className='price d-flex'>
                          <div className='text-muted me-2'>{item.title}</div>: {item.price}
                        </div>
                        <div className='avaiabilty'>
                          <div className='text-success'>{item.position}</div>
                        </div>
                        <Button color={item.color} className='btn-xs' href={Href}>
                          {item.btnname}
                        </Button>
                        <span className='close'>
                          <FeatherIcons iconName='X' />
                        </span>
                      </div>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </CardBody>
        </Card>
      ))}
    </Col>
  );
};

export default NewOrders;
