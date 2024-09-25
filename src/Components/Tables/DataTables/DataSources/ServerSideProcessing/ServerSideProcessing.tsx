import { Card, CardBody, Col } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import DataTable from "react-data-table-component";
import { ServerSideProcessingHeading } from "@/utils/Constant";
import { serverSideData, serverSideProcessingColumns, serverSideProcessingSpan1, serverSideProcessingSpan2 } from "@/Data/Tables/DataTables/DataSourceData";
const ServerSideProcessing = () => {
  return (
    <Col sm={12}>
      <Card>
        <CommonHeader headClass='pb-0 card-no-border' title={ServerSideProcessingHeading} subTitle={serverSideProcessingSpan1} subTitle2={serverSideProcessingSpan2} />
        <CardBody>
          <div className='table-responsive'>
            <DataTable data={serverSideData} columns={serverSideProcessingColumns} striped={true} pagination />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ServerSideProcessing;
