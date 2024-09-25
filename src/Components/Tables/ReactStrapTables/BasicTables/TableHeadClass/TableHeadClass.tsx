import { Card, Col, Row, Table } from 'reactstrap'
import CommonHeader from '../../../../../Common/CommonHeader'
import { TableHeadOptions } from '../../../../../utils/Constant'
import TableHeadClassTableHead from './TableHeadClassTableHead'
import TableHeadClassTableBody from './TableHeadClassTableBody'
import { tableHeadOptionsSpan } from '@/Data/Tables/ReactStrapTables/ReactStrapTablesData'

const TableHeadClass = () => {
  return (
    <Col sm={12} md={6} lg={6} xl={6}>
      <Card>
        <CommonHeader title={TableHeadOptions} subTitle={tableHeadOptionsSpan}/>
        <Row className="card-block">
          <Col sm={12}>
            <div className="table-responsive">
              <Table>
                <TableHeadClassTableHead />
                <TableHeadClassTableBody />
              </Table>
            </div>
          </Col>
        </Row>
      </Card>
    </Col>
  )
}

export default TableHeadClass