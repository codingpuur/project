import { Card, CardBody, Col, Table } from "reactstrap";
import GridTableHead from "./GridTableHead";
import GridTableBody from "./GridTableBody";
import { GridOption } from "@/utils/Constant";
import { GridOptionsData } from "@/Data/Uikits/Grid/GridData";
import CommonHeader from "@/Common/CommonHeader";

const GridOptions = () => {
  return (
    <Col sm={12}>
      <Card>
        <CommonHeader title={GridOption} subTitle={GridOptionsData} headClass='pb-0'/>
        <CardBody>
          <div className="table-responsive">
            <Table bordered striped>
              <GridTableHead />
              <GridTableBody />
            </Table>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default GridOptions;
