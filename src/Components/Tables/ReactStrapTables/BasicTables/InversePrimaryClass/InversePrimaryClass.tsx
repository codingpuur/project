import { Card, Col, Table } from 'reactstrap'
import CommonHeader from '../../../../../Common/CommonHeader'
import { InverseTablePrimaryBackground } from '../../../../../utils/Constant'
import InversTableClassTableHead from './InversTableClassTableHead'
import InversTableClassTableBody from './InversTableClassTableBody'
import { inverseTableSpan } from '@/Data/Tables/ReactStrapTables/ReactStrapTablesData'

const InversePrimaryClass = () => {
  return (
    <Col sm={12}>
      <Card className='Inverse-table-primary'>
        <CommonHeader title={InverseTablePrimaryBackground} subTitle={inverseTableSpan}/>
        <div className="table-responsive">
          <Table striped className="bg-primary">
            <InversTableClassTableHead /> 
            <InversTableClassTableBody />
          </Table>
        </div>
      </Card>
    </Col>
  )
}

export default InversePrimaryClass