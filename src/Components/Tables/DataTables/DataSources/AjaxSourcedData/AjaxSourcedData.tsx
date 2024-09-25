import { Card, CardBody, Col } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import DataTable from "react-data-table-component";
import { AjaxSourcedDataHeading } from "@/utils/Constant";
import { ajaxSourcedColumns, ajaxSourcedDatas, ajaxTableSpan } from "@/Data/Tables/DataTables/DataSourceData";
const AjaxSourcedData = () => {
  return (
    <Col sm={12}>
      <Card>
        <CommonHeader headClass='pb-0 card-no-border' title={AjaxSourcedDataHeading} subTitle={ajaxTableSpan} />
        <CardBody>
          <div className='table-responsive'>
            <DataTable data={ajaxSourcedDatas} columns={ajaxSourcedColumns} striped={true} pagination />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default AjaxSourcedData;
