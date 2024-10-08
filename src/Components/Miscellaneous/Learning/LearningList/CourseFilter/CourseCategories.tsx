import { Button, Card, CardBody, Col, Collapse } from "reactstrap";
import HeaderWithIcon from "@/CommonElements/HeaderWithIcon";
import { Filter, FindCourse } from "@/utils/Constant";
import { useState } from "react";
import CategoriesCheckBox from "./CategoriesCheckBox";
import SearchInput from "./SearchInput";
import DurationCheckBox from "./DurationCheckBox";
import PriceCheckBox from "./PriceCheckBox";
import StatusCheckBox from "./StatusCheckBox";

const CourseCategories = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <Col xl={12}>
      <Card>
        <HeaderWithIcon Heading={FindCourse} isOpen={isOpen} setIsOpen={setIsOpen} />
        <Collapse isOpen={isOpen}>
          <CardBody className='filter-cards-view animate-chk'>
            <SearchInput />
            <CategoriesCheckBox />
            <DurationCheckBox />
            <PriceCheckBox />
            <StatusCheckBox />
            <Button color='primary' className='text-center'>
              {Filter}
            </Button>
          </CardBody>
        </Collapse>
      </Card>
    </Col>
  );
};

export default CourseCategories;
