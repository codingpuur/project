"use client";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import Breadcrumbs from "@/CommonElements/Breadcrumbs/Breadcrumbs";
import { Href, UserCards, Users } from "@/utils/Constant";
import { userCardData } from "@/Data/Apps/SocialApp/SocialAppData";
import SVG from "@/utils/CommonSvgIcon/SVG";
import SocialMediaIcons from "./SocialMediaIcons";
import UserCardsFooter from "./UserCardsFooter";
import Image from "next/image";
import { ImagePath } from "@/Constant";
import Link from "next/link";

const UserCardContainer = () => {
  return (
    <>
      <Breadcrumbs title={UserCards} mainTitle={UserCards} parent={Users} />
      <Container fluid>
        <Row className="user-cards-items user-card-wrapper card-image">
          {userCardData.map((item) => (
            <Col xl={4} sm={6} xxl={3} className="col-ed-4 box-col-4" key={item.id}>
              <Card className="social-profile">
                <CardBody>
                  <div className="social-img-wrap">
                    <div className="social-img">
                      <Image width={68} height={68} src={`${ImagePath}/${item.avatar}`} className="img-fluid" alt="user" />
                    </div>
                    <div className="edit-icon">
                      <SVG iconId="profile-check" />
                    </div>
                  </div>
                  <div className="social-details">
                    <h5 className="mb-1">
                      <Link href={Href}>{item.name}</Link>
                    </h5>
                    <span className="f-light">{item.email}</span>
                    <SocialMediaIcons listClassName="card-social" />
                    <UserCardsFooter item={item} />
                  </div>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default UserCardContainer;
