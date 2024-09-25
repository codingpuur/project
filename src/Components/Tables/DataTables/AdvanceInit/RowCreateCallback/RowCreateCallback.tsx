import { Card, CardBody, Col } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import { RowCreateCallBackHeading } from "@/utils/Constant";
import { rowCreateCallBackSpan, rowCreateCallBackTableColumns, rowCreateCallBackTableData } from "@/Data/Tables/DataTables/AdavanceInitData";
import DataTable from "react-data-table-component";

const RowCreateCallback = () => {
  return (
    <Col sm={12}>
      <Card>
        <CommonHeader headClass='pb-0 card-no-border' subTitle={rowCreateCallBackSpan} title={RowCreateCallBackHeading} />
        <CardBody>
          <div className='table-responsive theme-scrollbar' id='row_create'>
            <DataTable data={rowCreateCallBackTableData} columns={rowCreateCallBackTableColumns} striped={true} pagination className='display dataTable' />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default RowCreateCallback;
