import DataTable from 'react-data-table-component'
import { Card, CardBody, Col } from 'reactstrap'
import StockResultCardHeader from './StockResultCardHeader'
import { stockResultTableColumns, stockResultTableData } from '@/Data/Tables/DataTables/AdavanceInitData'

const StockResult = () => {
  return (
    <Col sm={12}>
      <Card>
        <StockResultCardHeader />
        <CardBody>
          <div className="table-responsive theme-scrollbar">
            <div id="stock_wrapper" className="dataTables_wrapper"> 
              <DataTable data={stockResultTableData} columns={stockResultTableColumns} striped={true} fixedHeader fixedHeaderScrollHeight="40vh" className="display dataTable custom-scrollbar"/>
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  )
}

export default StockResult