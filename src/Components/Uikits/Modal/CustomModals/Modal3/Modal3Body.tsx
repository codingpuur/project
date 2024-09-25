import { Card, CardBody, Col } from "reactstrap";
import { Href, YourBalance } from "@/utils/Constant";
import SVG from "@/utils/CommonSvgIcon/SVG";
import Investment from "./Investment";
import CashBack from "./CashBack";
import { ImagePath } from "@/Constant";
import Image from "next/image";
import Link from "next/link";

const Modal3Body = () => {
  return (
    <Col xl={12}>
      <Card className="balance-box mb-0">
        <CardBody>
          <div className="balance-profile">
            <div className="balance-img">
              <Image
                src={`${ImagePath}/dashboard-2/user/user.png`}
                alt="user vector"
                width={64}
                height={64}
              />
              <Link href={Href} className="edit-icon">
                <SVG iconId="pencil" />
              </Link>
            </div>
            <span className="f-light d-block">{YourBalance}</span>
            <h5 className="mt-1">$768,987.90</h5>
            <ul>
              <Investment />
              <CashBack />
            </ul>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Modal3Body;
