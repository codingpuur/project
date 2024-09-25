import { Badge, Card, CardBody, Col } from "reactstrap";
import { Href, PillsWithIcons } from "@/utils/Constant";
import CommonHeader from "@/Common/CommonHeader";
import { RoundedPillIconTopData, roundedPillData } from "@/Data/Uikits/TagPills/TagPillsData";
import FeatherIcons from "@/utils/CommonSvgIcon/FeatherIcons";

const RoundedPillIcon = () => {
  return (
    <Col sm={12} xl={6}>
      <Card>
        <CommonHeader title={PillsWithIcons} subTitle={RoundedPillIconTopData} headClass='pb-0'/>
        <CardBody>
          <div className="badge-spacing">
          <Badge className="rounded-circle p-2" color='primary' to={Href} >
            <FeatherIcons iconName="DollarSign" />
          </Badge>
            {roundedPillData &&
              roundedPillData.map((item, index) => (
                <Badge className="rounded-circle p-2" color={item.class} to={Href} key={index}>
                  <FeatherIcons iconName={item.iconName} />
                </Badge>
              ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default RoundedPillIcon;
