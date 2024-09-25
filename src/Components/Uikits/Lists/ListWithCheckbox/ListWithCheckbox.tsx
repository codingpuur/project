import {Card, CardBody, Col, Input, Label, ListGroup, ListGroupItem} from "reactstrap";
import { AutoStart, Listswithcheckboxs } from "@/utils/Constant";
import CommonHeader from "@/Common/CommonHeader";
import { ListWithCheckboxTopData, listCheckboxData } from "@/Data/Uikits/Lists/ListsData";

const ListWithCheckbox = () => {
  return (
    <Col xxl={4} md={6}>
      <Card>
        <CommonHeader title={Listswithcheckboxs} subTitle={ListWithCheckboxTopData} headClass="pb-0"/>
        <CardBody className="dark-list">
          <ListGroup>
            <ListGroupItem >
              <Input className={` me-2 checkbox-primary`} id="firstCheckbox1" type="checkbox"/>
              <Label check className={`mb-0 txt-primary`} htmlFor="firstCheckbox1"> {AutoStart}</Label>
            </ListGroupItem>
            {listCheckboxData &&
              listCheckboxData.map((item, index) => (
                <ListGroupItem key={index}>
                  <Input className={` me-2 ${item.class}`} id={item.labelClass} type="checkbox" />
                  <Label check className={`mb-0 ${item.labelClass}`} htmlFor={item.labelClass} >{item.text} </Label>
                </ListGroupItem>
              ))}
          </ListGroup>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ListWithCheckbox;
