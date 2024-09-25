import { Table } from "reactstrap";
import { recentOrdersHeader } from "@/Data/Dashboard/ShoppingPlace/RecentOrders";
import RecentOrdersTableBody from "./RecentOrdersTableBody";

const RecentOrdersTable = () => {
  return (
    <div className="table-responsive theme-scrollbar recent-wrapper">
      <Table className="display order-wrapper" id="recent-order">
        <thead>
          <tr>
            {recentOrdersHeader.map((data,index) => (
              <th key={index}>{data}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <RecentOrdersTableBody />
        </tbody>
      </Table>
    </div>
  );
};

export default RecentOrdersTable;
