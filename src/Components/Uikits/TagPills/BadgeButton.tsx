import { Badge, Button, Card, CardBody, Col } from "reactstrap";
import { BadgesPartButtons, Message } from "@/utils/Constant";
import CommonHeader from "@/Common/CommonHeader";
import { BadgeButtonTopData, badgeButtonData } from "@/Data/Uikits/TagPills/TagPillsData";
import FeatherIcons from "@/utils/CommonSvgIcon/FeatherIcons";

const BadgeButton = () => {
  return (
    <Col sm={12} xl={6}>
      <Card>
        <CommonHeader title={BadgesPartButtons} subTitle={BadgeButtonTopData} headClass='pb-0'/>
        <CardBody>
          <div className="badge-spacing flex-column align-items-start">
            <Button color="primary" className="d-flex align-items-center">
              {Message}
              <Badge color="light" className="rounded-circle btn-p-space text-dark ms-2">
                <FeatherIcons iconName="Mail" />
              </Badge>
            </Button>
            {badgeButtonData &&
              badgeButtonData.map((item, index) => (
                <Button color={item.class} className="d-flex align-items-center" key={index} >
                  {item.text}
                  <Badge color="light" className="rounded-circle btn-p-space text-dark ms-2" >
                    <FeatherIcons iconName={item.iconName} />
                  </Badge>
                </Button>
              ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BadgeButton;
