import { Card, CardBody, Col } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import DataTable from "react-data-table-component";
import { JavascriptSourcedDataHeading } from "@/utils/Constant";
import { ajaxSourcedColumns, javaScriptTableSpan1, javaScriptTableSpan2, javascriptSourcedData } from "@/Data/Tables/DataTables/DataSourceData";
const JavaScriptSourcedData = () => {
  return (
    <Col sm={12}>
      <Card>
        <CommonHeader headClass='pb-0 card-no-border' title={JavascriptSourcedDataHeading} subTitle={javaScriptTableSpan1} subTitle2={javaScriptTableSpan2} />
        <CardBody>
          <div className='table-responsive'>
            <DataTable data={javascriptSourcedData} columns={ajaxSourcedColumns} striped={true} pagination />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default JavaScriptSourcedData;
