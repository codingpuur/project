import { Table } from "reactstrap";
import { Class, HorizontalClass, HorizontalPosition, Valueclass } from "@/utils/Constant";

const HorizontalTable = () => {
  return (
    <div className="table-responsive">
      <Table className="w-100">
        <tbody />
        <tbody>
          <tr>
            <th>{Class}</th>
            <th>{Valueclass}</th>
          </tr>
          <tr>
            <td>
              <code>{HorizontalClass}</code>
            </td>
            <td>{HorizontalPosition}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default HorizontalTable;
