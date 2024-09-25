import { useState } from "react";
import { Card, CardBody, Col } from "reactstrap";
import { MultipleCollapseAccordion } from "@/utils/Constant";
import CollapesButton from "./CollapesButton";
import CollapesBody from "./CollapesBody";
import CommonHeader from "@/Common/CommonHeader";
import { MultipleCollapesData } from "@/Data/Uikits/Accordion/AccordionData";

const MultipleCollapes = () => {
  const [collapesId, setCollapesId] = useState({
    collapes1: false,
    collapes2: false,
  });

  return (
    <Col sm={12}>
      <Card>
        <CommonHeader title={MultipleCollapseAccordion} subTitle={MultipleCollapesData} headClass='pb-0' />
        <CardBody>
          <CollapesButton setCollapesId={setCollapesId} collapesId={collapesId} />
          <CollapesBody collapesId={collapesId} />
        </CardBody>
      </Card>
    </Col>
  );
};

export default MultipleCollapes;
