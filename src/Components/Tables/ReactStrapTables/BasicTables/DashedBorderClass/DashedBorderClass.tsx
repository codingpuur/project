import { Card, Col, Table } from "reactstrap";
import CommonHeader from "../../../../../Common/CommonHeader";
import DashedBorderClassTableHead from "./DashedBorderClassTableHead";
import DashedBorderClassTableBody from "./DashedBorderClassTableBody";
import { DashedBorder } from "../../../../../utils/Constant";
import { dashedBorderSpan } from "@/Data/Tables/ReactStrapTables/ReactStrapTablesData";

const DashedBorderClass = () => {
  return (
    <Col sm={12}>
      <Card>
        <CommonHeader title={DashedBorder} subTitle={dashedBorderSpan} />
        <div className="table-responsive">
          <Table className="table-dashed">
            <DashedBorderClassTableHead />
            <DashedBorderClassTableBody />
          </Table>
        </div>
      </Card>
    </Col>
  );
};

export default DashedBorderClass;
