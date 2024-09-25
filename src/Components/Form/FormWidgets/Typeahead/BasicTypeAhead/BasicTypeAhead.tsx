import { Card, CardBody, Col, Form } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import { BasicTypeAheadHeading } from "@/utils/Constant";
import { Typeahead } from "react-bootstrap-typeahead";
import { basicTypeAheadData, statesOfUSA } from "@/Data/Form/FormWidgets/TypeaheadData";

const BasicTypeAhead = () => {
  return (
    <Col sm={12} md={6}>
      <Card>
        <CommonHeader title={BasicTypeAheadHeading} subTitle={basicTypeAheadData} headClass='pb-0' />
        <CardBody>
          <div id='the-basics'>
            <Form className='theme-form'>
              <div>
                <Typeahead options={statesOfUSA} placeholder='States of USA' id='1' />
              </div>
            </Form>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BasicTypeAhead;
