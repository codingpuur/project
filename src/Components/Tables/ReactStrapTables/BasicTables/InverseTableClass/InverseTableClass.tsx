import { Card, Col, Table } from 'reactstrap'
import CommonHeader from '../../../../../Common/CommonHeader'
import { InverseTable } from '../../../../../utils/Constant'
import InverseTableClassTableHead from './InverseTableClassTableHead'
import InverseTableClassTableBody from './InverseTableClassTableBody'
import { inverseTableSpan } from '@/Data/Tables/ReactStrapTables/ReactStrapTablesData'

const InverseTableClass = () => {
  return (
    <Col sm={12}>
      <Card>
        <CommonHeader title={InverseTable} subTitle={inverseTableSpan} />
        <div className="table-responsive">
          <Table className="table-inverse">
            <InverseTableClassTableHead />
            <InverseTableClassTableBody />
          </Table>
        </div>
      </Card>
    </Col>
  )
}

export default InverseTableClass