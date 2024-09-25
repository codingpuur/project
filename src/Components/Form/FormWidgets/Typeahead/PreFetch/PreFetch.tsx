import { Card, CardBody, Col, Form } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import { PreFetchHeading } from "@/utils/Constant";
import { Typeahead } from "react-bootstrap-typeahead";
import { countryList, preFetchHeadingData } from "@/Data/Form/FormWidgets/TypeaheadData";

const PreFetch = () => {
  return (
    <Col sm={12} md={6}>
      <Card>
        <CommonHeader title={PreFetchHeading} subTitle={preFetchHeadingData} headClass='pb-0' />
        <CardBody>
          <div id='prefetch'>
            <Form className='theme-form'>
              <div>
                <Typeahead options={countryList} placeholder='Countries' id='1' />
              </div>
            </Form>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default PreFetch;
