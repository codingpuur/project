import { Table } from "reactstrap";
import HeadingsTablesBody from "./HeadingsTablesBody";
import { Code, FontSize, Heading } from "@/utils/Constant";

const HeadingsBody = () => {
  return (
    <div className="table-responsive theme-scrollbar">
      <Table className="mb-0 typography-table">
        <thead>
          <tr>
            <th className="pt-0">{Code}</th>
            <th className="pt-0">{FontSize}</th>
            <th className="pt-0">{Heading}</th>
          </tr>
        </thead>
        <tbody>
          <HeadingsTablesBody />
        </tbody>
      </Table>
    </div>
  );
};

export default HeadingsBody;
