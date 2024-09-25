import { Card, CardBody, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Disabledlists } from "@/utils/Constant";
import CommonHeader from "@/Common/CommonHeader";
import { DisableListData, disableListData } from "@/Data/Uikits/Lists/ListsData";
import Image from "next/image";
import { ImagePath } from "@/Constant";

const DisableList = () => {
  return (
    <Col xxl={4} md={6}>
      <Card>
        <CommonHeader title={Disabledlists} subTitle={DisableListData} headClass='pb-0' />
        <CardBody>
          <ListGroup>
            <ListGroupItem className={`list-group-item-action list-hover-primary active`}>
              <Image className='rounded-circle' src={`${ImagePath}/user/1.jpg`} alt='user' width={100} height={100} />
              {"Teresa J. Mosteller"}
            </ListGroupItem>
            {disableListData &&
              disableListData.map((item, index) => (
                <ListGroupItem className={`list-group-item-action ${item.class}`} key={index}>
                  <Image className='rounded-circle' src={`${ImagePath}/${item.img}`} alt='user' width={100} height={100} />
                  {item.text}
                </ListGroupItem>
              ))}
          </ListGroup>
        </CardBody>
      </Card>
    </Col>
  );
};

export default DisableList;
