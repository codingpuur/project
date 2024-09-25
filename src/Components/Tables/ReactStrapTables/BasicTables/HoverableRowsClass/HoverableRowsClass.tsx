import { Card, Col, Table } from 'reactstrap'
import CommonHeader from '../../../../../Common/CommonHeader'
import { HoverableRowsWithHorizontalBorder } from '../../../../../utils/Constant'
import HoverableRowsTableHead from './HoverableRowsTableHead'
import HoverableRowsTableBody from './HoverableRowsTableBody'
import { hoverableRowsBorderSpan } from '@/Data/Tables/ReactStrapTables/ReactStrapTablesData'

const HoverableRowsClass = () => {
  return (
    <Col sm={12}>
      <Card>
        <CommonHeader title={HoverableRowsWithHorizontalBorder} subTitle={hoverableRowsBorderSpan}/>
        <div className="table-responsive">
          <Table hover={true} className="table-border-horizontal">
            <HoverableRowsTableHead />
            <HoverableRowsTableBody />
          </Table>
        </div>
      </Card>
    </Col>
  )
}

export default HoverableRowsClass