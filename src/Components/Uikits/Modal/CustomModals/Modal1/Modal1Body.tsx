import { Card, CardBody, Col } from "reactstrap";
import { BrooklynSimmons, Brooklysimmons, Href } from "@/utils/Constant";
import BgImage from "./BgImage";
import Link from "next/link";
import { demoModalData } from "@/Data/Uikits/Model/ModalData";

const Modal1Body = ({setmodal}:any) => {
  return (
    <Col xl={12}>
      <Card className={`social-profile mb-0 ${setmodal?'custom-social-profile':''}`}>
        <CardBody>
          <BgImage />
          <div className="social-details">
            <h5 className="mb-1">
              <Link href={Href}>{BrooklynSimmons}</Link>
            </h5>
            <span className="f-light">{Brooklysimmons}</span>
            <ul className="social-follow">
              {demoModalData &&
                demoModalData.map((item, index) => (
                  <li key={index}>
                    <h5 className="mb-0">{item.class}</h5>
                    <span className="f-light">{item.text}</span>
                  </li>
                ))}
            </ul>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Modal1Body;
