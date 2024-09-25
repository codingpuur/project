import { Col, Media, Row } from "reactstrap";
import { WilliamJennings } from "@/utils/Constant";
import { ImagePath } from "@/Constant";
import Link from "next/link";
import { tourProfileData } from "@/Data/BonusUi/Tour/TourData";
import Image from "next/image";
import { CommonProfileHeadType } from "@/Types/BonusuiTypes";

const CommonProfileHead:React.FC<CommonProfileHeadType> = ({ month, time, activeTime }) => {
  return (
    <Row className="g-2 align-items-center">
      <Col sm={8}>
        <div className="d-flex">
          <Image
            className="img-thumbnail rounded-circle me-3"
            src={`${ImagePath}/user/7.jpg`}
            alt="Generic placeholder image"
            height={300}
            width={300}
          />
          <Media body className="align-self-center">
            <h5 className="mt-0 user-name">{WilliamJennings}</h5>
            <div className="tour-wrapper">
              <span>{month}</span>
              <i className="tour-dot fa fa-circle"></i>
              <span className="txt-danger">{time}</span>
            </div>
          </Media>
        </div>
      </Col>
      <Col sm={4} className="text-end align-self-center mt-0">
        <div
          className="social-media social-tour"
          data-intro="This is your social details"
        >
          <ul className="list-inline simple-list flex-row">
            {tourProfileData.map((data,index) => (
              <li className="list-inline-item" key={index}>
                <Link href={data.link} target="_blank">
                  <i className={data.icon}></i>
                </Link>
              </li>
            ))}
          </ul>
          <div className="float-sm-end">
            <small>{activeTime}</small>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default CommonProfileHead;
