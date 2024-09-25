import { Card, CardBody,Col,Input, Label, ListGroup, ListGroupItem} from "reactstrap";
import { Listswithradios, Meditations } from "@/utils/Constant";
import CommonHeader from "@/Common/CommonHeader";
import { RadioListTopData, listRadioData } from "@/Data/Uikits/Lists/ListsData";

const RadioList = () => {
  return (
    <Col xxl={4} md={6}>
      <Card>
        <CommonHeader title={Listswithradios} subTitle={RadioListTopData} headClass="pb-0"/>
        <CardBody>
          <ListGroup>
            <ListGroupItem >
              <Input className="me-2 checkbox-danger active" id="firstRadio" type="radio" name="listGroupRadio" />
              <Label check className="mb-0" htmlFor="firstRadio">{Meditations}</Label>
            </ListGroupItem>
            {listRadioData &&
              listRadioData.map((item, index) => (
                <ListGroupItem key={index}>
                  <Input className={`me-2 ${item.class}`} id={`firstRadio${index}`} type="radio" name="listGroupRadio"/>
                  <Label check className="mb-0" htmlFor={`firstRadio${index}`} >{item.text} </Label>
                </ListGroupItem>
              ))}
          </ListGroup>
        </CardBody>
      </Card>
    </Col>
  );
};

export default RadioList;
