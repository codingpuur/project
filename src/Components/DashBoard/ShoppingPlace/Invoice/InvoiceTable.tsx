import { Table } from "reactstrap";
import { invoiceHeader } from "@/Data/Dashboard/ShoppingPlace/InvoiceTable";
import InvoiceTableBody from "./InvoiceTableBody";

const InvoiceTable = () => {
  return (
    <div className="table-responsive theme-scrollbar dataTables_wrapper">
      <Table className="display" id="information">
        <thead>
          <tr>
            {invoiceHeader.map((data,index) => (
              <th key={index}>{data}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <InvoiceTableBody />
        </tbody>
      </Table>
    </div>
  );
};

export default InvoiceTable;
