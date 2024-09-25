import { Card, CardBody, Col, Row } from "reactstrap";
import { GridColumnDataTop, gridColumnData } from "@/Data/Uikits/Grid/GridData";
import CommonHeader from "@/Common/CommonHeader";
import { GridForColumn } from "@/utils/Constant";

const GridColumn = () => {
  
  return (
    <Col sm={12}>
      <Card>
        <CommonHeader title={GridForColumn} subTitle={GridColumnDataTop} headClass='pb-0'/>
        <CardBody className="grid-showcase">
          <Row>
            {gridColumnData &&
              gridColumnData.map((item, index) => (
                <div className={`text-center ${item.class}`} key={index}>
                  <span>{item.text}</span>
                </div>
              ))}
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default GridColumn;
