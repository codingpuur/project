import { Card, CardBody, Col } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import DataTable from "react-data-table-component";
import { HtmlTableTittle } from "@/utils/Constant";
import { htmlColumns, htmlColumnsTableData, htmlTableSpan } from "@/Data/Tables/DataTables/DataSourceData";
const HtmlSourcedData = () => {
  return (
    <Col sm={12}>
      <Card>
        <CommonHeader headClass='pb-0 card-no-border' title={HtmlTableTittle} subTitle={htmlTableSpan} />
        <CardBody>
          <div className='table-responsive'>
            <DataTable data={htmlColumnsTableData} columns={htmlColumns} striped={true} pagination />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default HtmlSourcedData;
