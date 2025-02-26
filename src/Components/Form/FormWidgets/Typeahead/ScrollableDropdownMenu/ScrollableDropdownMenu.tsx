import { Card, CardBody, Col, Form } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import { Typeahead } from "react-bootstrap-typeahead";
import { ScrollableDropDownMenus } from "@/utils/Constant";
import { countryList, scrollableDropDownData } from "@/Data/Form/FormWidgets/TypeaheadData";

const ScrollableDropdownMenu = () => {
  return (
    <Col sm={12} md={6}>
      <Card>
        <CommonHeader title={ScrollableDropDownMenus} subTitle={scrollableDropDownData} headClass='pb-0' />
        <CardBody>
          <div id='scrollable-dropdown-menu'>
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

export default ScrollableDropdownMenu;
