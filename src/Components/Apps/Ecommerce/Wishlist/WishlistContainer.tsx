"use client";
import { Button, Card, CardBody, Col, Container, Row } from "reactstrap";
import Breadcrumbs from "@/CommonElements/Breadcrumbs/Breadcrumbs";
import { Ecommerce, Href, Wishlists } from "@/utils/Constant";
import CommonHeader from "@/Common/CommonHeader";
import { wishlistData } from "@/Data/Apps/Ecommerce/WishlistData";
import CommonRating from "../OrderHistory/CommonRating";
import Image from "next/image";
import Link from "next/link";
import { ImagePath } from "@/Constant";

const WishlistContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={Wishlists} parent={Ecommerce} title={Wishlists} />
      <Container fluid>
        <Row>
          <Col sm={12}>
            <Card>
              <CommonHeader title={Wishlists} />
              <CardBody>
                <Row className='g-sm-4 g-3'>
                  {wishlistData.map((data, index) => (
                    <Col xl={4} md={6} key={index}>
                      <div className='prooduct-details-box'>
                        <div className='d-flex'>
                          <Image className='align-self-center img-fluid img-60' src={`${ImagePath}/${data.img}`} alt='#' height={60} width={60}/>
                          <div className='media-body ms-3'>
                            <div className='product-name'>
                              <h3>
                                <Link href={Href}>{data.name}</Link>
                              </h3>
                            </div>
                            <CommonRating />
                            <div className='price d-flex'>
                              <div className='text-muted me-2'>{data.title}</div>: {data.amount}
                            </div>
                            <div className='avaiabilty'>
                              <div className='text-success'>{data.stock}</div>
                            </div>
                            <Button color='primary' className='btn-xs' href='/ecommerce/wishlist' onClick={(e)=>e.preventDefault()}>
                              {data.btn}
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Col>
                  ))}
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default WishlistContainer;
