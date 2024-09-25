import CommonHeader from "@/Common/CommonHeader";
import { OrderHistoryData, OrderHistoryDataColumn } from "@/Data/Apps/Ecommerce/OrderHistoryData";
import { Datatableorderhistory } from "@/utils/Constant";
import { useMemo, useState } from "react";
import DataTable from "react-data-table-component";
import { Card, CardBody, Col, Input, Label } from "reactstrap";

const DataTableOrderHistory = () => {
  const [filterText, setFilterText] = useState("");

  const filteredItems = OrderHistoryData.filter((item) =>item.productName && item.productName.toLowerCase().includes(filterText.toLowerCase()));
  
  const subHeaderComponentMemo = useMemo(() => {
    return (
      <div id="basic-1_filter" className="dataTables_filter d-flex align-items-center">
        <Label className="me-2">{'SearchTableButton'}:</Label>
        <Input onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFilterText(e.target.value)} type="search" value={filterText} />
      </div>
    );
  }, [filterText]);

  return (
    <Col sm="12">
      <Card>
        <CommonHeader title={Datatableorderhistory} />
        <CardBody>
          <div className="order-history table-responsive">
            <DataTable data={filteredItems} columns={OrderHistoryDataColumn} className="dataTables_wrapper no-footer theme-scrollbar" highlightOnHover noHeader pagination paginationServer subHeader subHeaderComponent={subHeaderComponentMemo} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default DataTableOrderHistory;