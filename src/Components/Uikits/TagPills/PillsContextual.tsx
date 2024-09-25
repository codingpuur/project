import { Badge, Card, CardBody, Col } from "reactstrap";
import { PillsVariations, Primary } from "@/utils/Constant";
import CommonHeader from "@/Common/CommonHeader";
import { PillsContextualData, pillsData } from "@/Data/Uikits/TagPills/TagPillsData";

const PillsContextual = () => {
  return (
    <Col sm={12} xl={6}>
      <Card>
        <CommonHeader title={PillsVariations} subTitle={PillsContextualData} headClass='pb-0'/>
        <CardBody>
          <div className="badge-spacing">
            <Badge pill color='primary'> {Primary}</Badge>
            {pillsData &&
              pillsData.map((item, index) => (
                <Badge pill color={`${item.class}`} key={index}>
                  {item.text}
                </Badge>
              ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default PillsContextual;
