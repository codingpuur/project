import { Badge, Card, CardBody, Col } from "reactstrap";
import { BadgeWithIconTopdata, badgeIconData } from "@/Data/Uikits/TagPills/TagPillsData";
import CommonHeader from "@/Common/CommonHeader";
import FeatherIcons from "@/utils/CommonSvgIcon/FeatherIcons";
import { BadgeIcons, Href } from "@/utils/Constant";

const BadgeWithIcon = () => {
  return (
    <Col sm={12} xl={6}>
      <Card>
        <CommonHeader title={BadgeIcons} subTitle={BadgeWithIconTopdata} headClass='pb-0'/>
        <CardBody>
          <div className="badge-spacing">
            <Badge className='b-ln-height' to={Href} color="primary" >
              <FeatherIcons iconName='DollarSign' />
            </Badge>
            {badgeIconData &&
              badgeIconData.map((item, index) => (
                <Badge className={item.class} color={item.color}  to={Href} key={index}>
                  <FeatherIcons iconName={item.iconName} />
                </Badge>
              ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BadgeWithIcon;
