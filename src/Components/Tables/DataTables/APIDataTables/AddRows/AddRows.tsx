import { useState } from "react";
import { Button, Card, CardBody, Col } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import DataTable from "react-data-table-component";
import { addRowsSpan1, addRowsSpan2, addRowsTableColumns, addRowsTableData } from "@/Data/Tables/DataTables/APITablesData";
import { AddNewRow, AddRowsHeading } from "@/utils/Constant";

const AddRows = () => {
  const [tableData, setTableData] = useState(addRowsTableData);
  const getRandomFloat = (min: number, max: number) => {
    const genrateRandom = Math.random() * (max - min) + min;
    return parseFloat(genrateRandom.toFixed(2));
  };
  const addNewRow = () => {
    const minimumValue = 10;
    const maximumValue = 100;
    const tempData = {
      column1: tableData[tableData.length - 1].column1 + 10,
      column2: getRandomFloat(minimumValue, maximumValue),
      column3: getRandomFloat(minimumValue, maximumValue),
      column4: getRandomFloat(minimumValue, maximumValue),
      column5: getRandomFloat(minimumValue, maximumValue),
    };
    setTableData([...tableData, tempData]);
  };
  return (
    <Col sm={12}>
      <Card>
        <CommonHeader headClass='pb-0 card-no-border' subTitle={addRowsSpan1} subTitle2={addRowsSpan2} title={AddRowsHeading} />
        <CardBody>
          <Button color='primary' className='mb-3' onClick={addNewRow}>
            {AddNewRow}
          </Button>
          <div className='table-responsive'>
            <div id='API-1' className='dataTables_wrapper'>
              <DataTable data={tableData} columns={addRowsTableColumns} striped={true} pagination className='display dataTable' />
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default AddRows;
