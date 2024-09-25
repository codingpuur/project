import { Badge, Card, CardBody, Col } from "reactstrap";
import { NumberBadgesTopData, numberBadgesData } from "@/Data/Uikits/TagPills/TagPillsData";
import CommonHeader from "@/Common/CommonHeader";
import { NumberofBadge } from "@/utils/Constant";

const NumberBadges = () => {
  return (
    <Col sm={12} xl={6}>
      <Card>
        <CommonHeader title={NumberofBadge} subTitle={NumberBadgesTopData} headClass='pb-0'/>
        <CardBody>
          <div className="badge-spacing">
            <Badge color='primary' >1</Badge>
            {numberBadgesData &&
              numberBadgesData.map((item, index) => (
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

export default NumberBadges;
