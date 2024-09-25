import { Card, CardBody, Col } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import { ZeroConfigurationHeading } from "@/utils/Constant";
import { zeroConfigurationSpan, zeroConfigurationSpan2, zeroConfigurationTableColumns, zeroConfigurationTableData } from "@/Data/Tables/DataTables/BasicIntData";
import DataTable from "react-data-table-component";

const ZeroConfiguration = () => {
  return (
    <Col sm={12}>
      <Card>
        <CommonHeader headClass='pb-0 card-no-border' title={ZeroConfigurationHeading} subTitle={zeroConfigurationSpan} subTitle2={zeroConfigurationSpan2} />
        <CardBody>
          <div className='table-responsive'>
            <DataTable data={zeroConfigurationTableData} columns={zeroConfigurationTableColumns} defaultSortAsc striped={true} pagination highlightOnHover />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ZeroConfiguration;
