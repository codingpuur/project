import DataTable from "react-data-table-component";
import { Card, CardBody, Col } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import { DynamicHeight } from "@/utils/Constant";
import { dynamicHeightSpan1, dynamicHeightSpan2, scrollVerticalDynamicHeightColumns, scrollVerticalDynamicHeightData } from "@/Data/Tables/DataTables/BasicIntData";

const ScrollVerticalDynamicHeight = () => {
  return (
    <Col sm={12}>
      <Card>
        <CommonHeader headClass='pb-0 card-no-border' title={DynamicHeight} subTitle={dynamicHeightSpan1} subTitle2={dynamicHeightSpan2} />
        <CardBody>
          <div className='table-responsive user-datatable custom-scrollbar'>
            <DataTable data={scrollVerticalDynamicHeightData} columns={scrollVerticalDynamicHeightColumns} striped={true} fixedHeader fixedHeaderScrollHeight='40vh' className='display dataTable' />
          </div>  
        </CardBody> 
      </Card>
    </Col>
  );
};

export default ScrollVerticalDynamicHeight;
