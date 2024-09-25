import { Card, Col, Row, Table } from 'reactstrap'
import CommonHeader from '../../../../../Common/CommonHeader'
import { SizeTable } from '../../../../../utils/Constant'
import SizingTableHead from './SizingTableHead'
import SizingTableBody from './SizingTableBody'
import { sizeTableSpan } from '@/Data/Tables/ReactStrapTables/ReactStrapTablesData'

const SizingTable = () => {
  return (
    <Col sm={12}>
      <Card>
        <CommonHeader title={SizeTable} subTitle={sizeTableSpan} />
        <Row className="card-block">
          <Col sm={12} lg={12} xl={12}>
            <div className="table-responsive">
              <Table size="lg">
                <SizingTableHead />
                <SizingTableBody />
              </Table>
            </div>
          </Col>
        </Row>
      </Card>
    </Col>
  )
}

export default SizingTable