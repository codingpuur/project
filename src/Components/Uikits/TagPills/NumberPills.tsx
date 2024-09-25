import { Badge, Card, CardBody, Col } from "reactstrap";
import { NumberofPills } from "@/utils/Constant";
import CommonHeader from "@/Common/CommonHeader";
import { NumberPillsTopData, numberPillsData } from "@/Data/Uikits/TagPills/TagPillsData";

const NumberPills = () => {
  return (
    <Col sm={12} xl={6}>
      <Card>
        <CommonHeader title={NumberofPills} subTitle={NumberPillsTopData} headClass='pb-0'/>
        <CardBody>
          <div className="badge-spacing">
            <Badge className='rounded-circle badge-p-space' color="primary">1</Badge>
            {numberPillsData &&
              numberPillsData.map((item, index) => (
                <Badge
                  className='rounded-circle badge-p-space' color={item.class}
                  key={index}
                >
                  {item.text}
                </Badge>
              ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default NumberPills;
