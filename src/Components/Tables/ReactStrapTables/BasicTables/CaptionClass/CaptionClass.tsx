import { Card, Col, Row, Table } from 'reactstrap'
import CommonHeader from '../../../../../Common/CommonHeader'
import { Caption, CaptionSpan } from '../../../../../utils/Constant'
import CaptionClassTableHead from './CaptionClassTableHead'
import CaptionClassTableBody from './CaptionClassTableBody'

const CaptionClass = () => {
  return (
    <Col sm={12}>
      <Card>
        <CommonHeader title={Caption} subTitle={CaptionSpan} />
        <Row className="card-block">
          <Col sm={12} lg={12} xl={12}>
            <div className="table-responsive">
              <Table>
                <CaptionClassTableHead />
                <CaptionClassTableBody />
              </Table>
            </div>
          </Col>
        </Row>
      </Card>
    </Col>
  )
}

export default CaptionClass