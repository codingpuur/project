import { Card, Col, Row, Table } from 'reactstrap'
import CommonHeader from '../../../../../Common/CommonHeader'
import { CustomTable } from '../../../../../utils/Constant'
import CustomeHoverTableHead from './CustomeHoverTableHead'
import CustomeHoverTableBody from './CustomeHoverTableBody'
import { customTableSpan } from '@/Data/Tables/ReactStrapTables/ReactStrapTablesData'

const CustomHoverClass = () => {
  return (
    <Col sm={12}>
      <Card>
        <CommonHeader title={CustomTable} subTitle={customTableSpan} />
        <Row className="card-block">
          <Col sm={12} lg={12} xl={12}>
            <div className="table-responsive">
              <Table hover striped>
                <CustomeHoverTableHead />
                <CustomeHoverTableBody />
              </Table>
            </div>
          </Col>
        </Row>
      </Card>
    </Col>
  )
}

export default CustomHoverClass