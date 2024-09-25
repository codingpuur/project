import { Card, Col, Table } from 'reactstrap'
import CommonHeader from '../../../../../Common/CommonHeader'
import { BasicTableWithBorderBottomColor } from '../../../../../utils/Constant'
import BasicTableClassTableHead from './BasicTableClassTableHead'
import BasicTableClassTableBody from './BasicTableClassTableBody'
import { basicTablesSubTitle } from '@/Data/Tables/ReactStrapTables/ReactStrapTablesData'

const BasicTableClass = () => {
  return (
    <Col sm={12}>
      <Card>
        <CommonHeader title={BasicTableWithBorderBottomColor} subTitle={basicTablesSubTitle}/>
        <div className="table-responsive">
          <Table>
            <BasicTableClassTableHead />
            <BasicTableClassTableBody />
          </Table>
        </div>
      </Card>
    </Col>
  )
}

export default BasicTableClass