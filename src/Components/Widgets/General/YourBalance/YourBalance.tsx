import { Card, CardBody, Col } from "reactstrap";
import { Href, YourBalances } from "@/utils/Constant";
import SVG from "@/utils/CommonSvgIcon/SVG";
import Investment from "./Investment";
import Link from "next/link";
import { ImagePath } from "@/Constant";
import Image from "next/image";

const YourBalance = () => {
  return (
    <Col xxl={3} xl={4} sm={6} className="box-col-6">
      <Card className="balance-box height-equal-2">
        <CardBody className="d-flex align-items-center justify-content-center">
          <div className="balance-profile">
            <div className="balance-img">
              <Image src={`${ImagePath}/dashboard-2/user/user.png`} alt="user vector" height={64} width={64}/>
              <Link className="edit-icon" href={Href}>
                <SVG iconId="pencil" />
              </Link>
            </div>
            <span className="f-light d-block">{YourBalances} </span>
            <h5 className="mt-1">$768,987.90</h5>
            <Investment />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default YourBalance;
