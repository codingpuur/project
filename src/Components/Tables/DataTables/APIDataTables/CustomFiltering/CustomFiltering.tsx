import { useState } from 'react'
import { Card, CardBody, Col } from 'reactstrap';
import CommonHeader from '@/Common/CommonHeader';
import DataTable from 'react-data-table-component';
import { CustomFilteringSearch } from '@/utils/Constant';
import { customFilteringSearchSpan, filterDataTableColumns, filterDataTableData } from '@/Data/Tables/DataTables/APITablesData';
import TableSearchBar from './TableSearchBar';
const CustomFiltering = () => {
  const [first, setFirst] = useState<any>(filterDataTableData);
  
  return (
    <Col sm={12}>
      <Card>
        <CommonHeader headClass="pb-0 card-no-border" subTitle={customFilteringSearchSpan} title={CustomFilteringSearch}/>
        <CardBody>
          <TableSearchBar setFirst={setFirst}  />
          <div className="table-responsive user-datatable custom-scrollbar">
            <div id="datatable-range_wrapper" className="dataTables_wrapper">
              <DataTable  
                data={first}
                columns={filterDataTableColumns}
                striped={true}
                pagination
              />
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  )
}

export default CustomFiltering