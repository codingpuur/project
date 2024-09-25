import { Card, CardBody, Col, ListGroup, ListGroupItem } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import { BorderPrimaryState } from "@/utils/Constant";
import { BorderPrimaryData, borderPrimaryState } from "@/Data/BonusUi/CreativeCard/CreativeCardData";
import Image from "next/image";
import { ImagePath } from "@/Constant";

const BorderPrimary = () => {
  return (
    <Col md={6} xxl={4}>
      <Card className="height-equal">
        <CommonHeader title={BorderPrimaryState} subTitle={BorderPrimaryData} headClass="border-l-primary border-3 pb-0"/>
        <CardBody>
          <ListGroup>
            {borderPrimaryState.map((data,index) => (
              <ListGroupItem className={`list-group-item-action pointer ${data.active && "active"}`} key={index}>
                <Image className="rounded-circle" src={`${ImagePath}/user/${data.img}`} alt="user" height={40} width={40}/>
                {data.name}
              </ListGroupItem>
            ))}
          </ListGroup>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BorderPrimary;
