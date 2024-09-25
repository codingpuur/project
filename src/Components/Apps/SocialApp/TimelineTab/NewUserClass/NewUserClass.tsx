import { Card, CardBody, Col } from "reactstrap";
import NewUsersSocial from "./NewUsersSocial";
import LikeContent from "./LikeContent";
import SocialChat from "./SocialChat";
import { userContentData } from "@/Data/Apps/SocialApp/SocialAppData";
import CommentsBox from "./CommentsBox";
import { ImagePath } from "@/Constant";
import Image from "next/image";

const NewUserClass = () => {
  return (
    <>
      {userContentData.map((data,index) => (
        <Col sm={12} key={index}>
          <Card>
            <CardBody>
              <NewUsersSocial data={data} />
              <Image className="img-fluid" alt="timeline" src={`${ImagePath}/social-app/timeline-1.png`} width={675} height={424}/>
              <div className="timeline-content">
                <p>{ "The only way to do something in depth is to work hard. I've always thought of the T-shirt as the Alpha of the fashion alphabet. My breakfast is very important. Everything I do is a matter of heart, body and soul." }
                </p>
                <LikeContent />
                <SocialChat data={data}/>
                <CommentsBox />
              </div>
            </CardBody>
          </Card>
        </Col>
      ))}
    </>
  );
};

export default NewUserClass;
