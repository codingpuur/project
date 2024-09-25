import { Badge, Card, CardBody, Col } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import { BadgesDataTop, badgesData } from "../../../Data/Uikits/TagPills/TagPillsData";
import { BadgesContextual, Primary } from "@/utils/Constant";

const Badges = () => {
  return (
    <Col sm={12} xl={6}>
      <Card>
        <CommonHeader title={BadgesContextual} subTitle={BadgesDataTop} headClass='pb-0'/>
        <CardBody>
          <div className="badge-spacing">
            <Badge color='primary'>{Primary}</Badge>
            {badgesData &&
              badgesData.map((item, index) => (
                <Badge color={`${item.class}`} key={index}>
                  {item.text}
                </Badge>
              ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Badges;
