import { Card, CardBody, Col } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import DataTable from "react-data-table-component";
import { ChildrenRows } from "@/utils/Constant";
import { childRowsTableColumns, childrenRowsSpan } from "@/Data/Tables/DataTables/APITablesData";
import { zeroConfigurationTableData } from "@/Data/Tables/DataTables/BasicIntData";
import ExpandedComponent from "./ExpandedComponent";

const ChildRows = () => {
  return (
    <Col sm={12}>
      <Card>
        <CommonHeader headClass='pb-0 card-no-border' subTitle={childrenRowsSpan} title={ChildrenRows} />
        <CardBody>
          <div className='table-responsive'>
            <div id='API-chield-row_wrapper' className='dataTables_wrapper'>
              <DataTable data={zeroConfigurationTableData} columns={childRowsTableColumns} striped={true} pagination expandableRows expandableRowsComponent={ExpandedComponent} />
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ChildRows;
