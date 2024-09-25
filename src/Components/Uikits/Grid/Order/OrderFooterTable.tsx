import { Class, OrderClass, OrderPosition, Valueclass } from "@/utils/Constant";
import { Table } from "reactstrap";

const OrderFooterTable = () => {
  return (
    <div className="table-responsive">
      <Table className="w-100">
        <tbody>
          <tr>
            <th>{Class}</th>
            <th>{Valueclass}</th>
          </tr>
          <tr>
            <td>
              <code>{OrderClass}</code>
            </td>
            <td>{OrderPosition}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default OrderFooterTable;
