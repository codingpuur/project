import { Badge, Card, CardBody, Col } from "reactstrap";
import { BadgeHeadings, BadgeHeadingsExample, Checkout, Inbox, Latest, Login, Logout, Trending} from "@/utils/Constant";
import { BadgeHeadingData } from "../../../Data/Uikits/TagPills/TagPillsData";
import CommonHeader from "@/Common/CommonHeader";

const BadgeHeading = () => {
  return (
    <Col sm={12} xl={6}>
      <Card>
        <CommonHeader title={BadgeHeadingsExample} subTitle={BadgeHeadingData} headClass='pb-0'/>
        <CardBody>
          <h1 className="pb-2 d-flex gap-2 flex-wrap">
            {BadgeHeadings} 1
            <Badge color="primary">{Latest}</Badge>
          </h1>
          <h2 className="pb-2 d-flex gap-2 flex-wrap">
            {BadgeHeadings} 2
            <Badge color="secondary">{Trending}</Badge>
          </h2>
          <h3 className="pb-2 d-flex gap-2 flex-wrap">
            {BadgeHeadings} 3
            <Badge color="success">{Checkout}</Badge>
          </h3>
          <h4 className="pb-2 d-flex gap-2 flex-wrap">
            {BadgeHeadings} 4
            <Badge color="warning">{Inbox}</Badge>
          </h4>
          <h5 className="pb-2 d-flex gap-2 flex-wrap">
            {BadgeHeadings} 5
            <Badge color="danger">{Login}</Badge>
          </h5>
          <h6 className="pb-2 d-flex gap-2 flex-wrap">
            {BadgeHeadings} 6
            <Badge color="dark">{Logout}</Badge>
          </h6>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BadgeHeading;
