import DataTable from "react-data-table-component";
import { Card, CardBody, Col } from "reactstrap";
import StateSavingCardHeader from "./StateSavingCardHeader";
import { stateSavingTableColumns, stateSavingTableData } from "@/Data/Tables/DataTables/BasicIntData";

const StateSaving = () => {
  return (
    <Col sm={12}>
      <Card>
        <StateSavingCardHeader />
        <CardBody>
          <div className='table-responsive'>
            <DataTable data={stateSavingTableData} columns={stateSavingTableColumns} striped={true} pagination />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default StateSaving;
