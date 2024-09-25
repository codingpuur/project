"use client";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import Breadcrumbs from "@/CommonElements/Breadcrumbs/Breadcrumbs";
import {Gallery, Href, MasonryGalleryWithDescriptions, PortfolioTitle} from "@/utils/Constant";
import CommonHeader from "@/Common/CommonHeader";
import Masonry from 'react-masonry-css';
import { masonryImageData } from "@/Data/Gallary/GallaryGridData";
import Image from "next/image";
import { ImagePath } from "@/Constant";

const MasonryGalleryWithDescriptionContainer = () => {
    const styles = { width: '100%' };
    const breakpointColumnsObj = {
        default: 4,
        1199: 3,
        700: 2,
        500: 1
      };
  return (
    <>
      <Breadcrumbs mainTitle={MasonryGalleryWithDescriptions} parent={Gallery} title={MasonryGalleryWithDescriptions}/>
      <Container fluid>
        <Row>
          <Col sm={12}>
            <Card>
              <CommonHeader title={MasonryGalleryWithDescriptions} headClass="pb-0"/>
              <CardBody className="photoswipe-pb-responsive">
                <Masonry
                  breakpointCols={breakpointColumnsObj}
                  className="my-masonry-grid masonry-with-dec my-gallery gallery-with-description row grid"
                  columnClassName="col-xl-3 col-sm-6 col-md-4 grid-item"
                >
                  {masonryImageData.map((element, index) => (
                    <li style={{ listStyle: "none" }} key={index} className="p-0" >
                      <figure>
                        <a href={Href} data-size="1600x950">
                          <Image
                            width={500}
                            height={500}
                            src={`${ImagePath}/${element.src}`}
                            style={styles}
                            alt="image"
                          />
                          <div className="caption">
                            <h4>{PortfolioTitle}</h4>
                            <p>{"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy."}</p>
                          </div>
                        </a>
                      </figure>
                    </li>
                  ))}
                </Masonry>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MasonryGalleryWithDescriptionContainer;
