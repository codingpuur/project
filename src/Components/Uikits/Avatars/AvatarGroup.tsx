import { Card, CardBody, Col } from "reactstrap";
import Group1 from "./Group1";
import Group2 from "./Group2";
import Group3 from "./Group3";
import { AvatarGroupData } from "@/Data/Uikits/Avatar/AvatarData";
import CommonHeader from "@/Common/CommonHeader";
import { Grouping } from "@/utils/Constant";

const AvatarGroup = () => {
  return (
    <Col md={6}>
      <Card className="height-equal">
        <CommonHeader title={Grouping} subTitle={AvatarGroupData} headClass='pb-0'/>
        <CardBody className="avatar-showcase">
          <div className="avatars">
            <Group1 />
            <Group2 />
            <Group3 />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default AvatarGroup;
