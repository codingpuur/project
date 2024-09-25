import { Card, Col, Row, Table } from 'reactstrap'
import CommonHeader from '../../../../../Common/CommonHeader'
import { ResponsiveTables } from '../../../../../utils/Constant'
import ResponsiveClassTableHead from './ResponsiveClassTableHead'
import ResponsiveClassTableBody from './ResponsiveClassTableBody'
import { responsiveTablesSpan } from '@/Data/Tables/ReactStrapTables/ReactStrapTablesData'

const ResponsiveClass = () => {
  return (
    <Col sm={12}>
      <Card>
        <CommonHeader title={ResponsiveTables} subTitle={responsiveTablesSpan}/>
        <Row className="card-block">
          <Col sm={12} lg={12} xl={12}>
            <div className="table-responsive">
              <Table className="table-light">
                <ResponsiveClassTableHead />
                <ResponsiveClassTableBody />
              </Table>
            </div>
          </Col>
        </Row>
      </Card>
    </Col>
  )
}

export default ResponsiveClass