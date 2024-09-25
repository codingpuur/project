import { Card, Col, Row, Table } from 'reactstrap'
import CommonHeader from '../../../../../Common/CommonHeader'
import { BreckPointSpecific } from '../../../../../utils/Constant'
import BreckPointClassTableHead from './BreckPointClassTableHead'
import BreckPointClassTableBody from './BreckPointClassTableBody'
import { breckPointSpecificSpan } from '@/Data/Tables/ReactStrapTables/ReactStrapTablesData'

const BreckPointClass = () => {
  return (
    <Col sm={12}>
      <Card>
        <CommonHeader title={BreckPointSpecific} subTitle={breckPointSpecificSpan}/>
        <Row className="card-block">
          <Col sm={12} lg={12} xl={12}>
            <div className="table-responsive">
              <Table className="table-responsive-sm">
                <BreckPointClassTableHead />
                <BreckPointClassTableBody />
              </Table>
            </div>
          </Col>
        </Row>
      </Card>
    </Col>
  )
}

export default BreckPointClass