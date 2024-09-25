import { Button, Card, CardBody, Col } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import DataTable from "react-data-table-component";
import { DeleteRow, RowsSelectionAndDeletion } from "@/utils/Constant";
import { deleteDataTableColumns, deleteRowData, rowsSelectionSpan } from "@/Data/Tables/DataTables/APITablesData";
import { useCallback, useState } from "react";
import { DeleteRowData } from "@/Types/DataTablesTypes";

const RowSelectionAndDeletion = () => {
  const [data, setData] = useState(deleteRowData);
  const [selectedRows, setSelectedRows] = useState<any>([]);
  const [toggleCleared, setToggleCleared] = useState(false);
  const handleRowSelected = useCallback((state: any) => {
    setSelectedRows(state.selectedRows);
  }, []);
  const handleDelete = () => {
    if (window.confirm(`Are you sure you want to delete:\r ${selectedRows.map((r: DeleteRowData) => r.name)}?`)) {
      setToggleCleared(!toggleCleared);
      setData(data.filter((item) => (selectedRows.filter((elem: DeleteRowData) => elem.id === item.id).length > 0 ? false : true)));
      setSelectedRows("");
    }
  };
  return (
    <Col sm={12}>
      <Card>
        <CommonHeader headClass='pb-0 card-no-border' subTitle={rowsSelectionSpan} title={RowsSelectionAndDeletion} />
        <CardBody>
          <div className='table-responsive'>
            <Button color='secondary' onClick={handleDelete} className='mb-3'>
              {DeleteRow}
            </Button>
            <div className='dataTables_wrapper'>
              <DataTable data={data} columns={deleteDataTableColumns} striped={true} pagination selectableRows onSelectedRowsChange={handleRowSelected} clearSelectedRows={toggleCleared} />
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default RowSelectionAndDeletion;
