import { Card, Col, Row, Table } from 'reactstrap'
import CommonHeader from '../../../../../Common/CommonHeader'
import { StripedRowWithInverseTable } from '../../../../../utils/Constant'
import StripInverseClassTableHead from './StripInverseClassTableHead'
import StripInverseClassTableBody from './StripInverseClassTableBody'
import { stripedRowWithInverseTableSpan } from '@/Data/Tables/ReactStrapTables/ReactStrapTablesData'

const StripeInverseClass = () => {
  return (
    <Col md={6}>
      <Card className=''> 
        <CommonHeader title={StripedRowWithInverseTable} subTitle={stripedRowWithInverseTableSpan}/>
        <Row className="card-block">
          <Col sm={12} lg={12} xl={12}>
            <div className="table-responsive"> 
              <Table striped className="table-inverse">
                <StripInverseClassTableHead /> 
                <StripInverseClassTableBody /> 
              </Table>
            </div>
          </Col>
        </Row>
      </Card>
    </Col>
  )
}

export default StripeInverseClass