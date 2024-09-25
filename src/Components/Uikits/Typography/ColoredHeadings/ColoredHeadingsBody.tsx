import { Code, Heading, Heading1, SubHeading } from "@/utils/Constant";
import { Table } from "reactstrap";

const ColoredHeadingsBody = () => {
  return (
    <div className="table-responsive theme-scrollbar">
      <Table className="mb-0 typography-table">
        <thead>
          <tr>
            <th className="pt-0">{Code}</th>
            <th className="pt-0">{Heading}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>{'<h1></h1>'}</code></td>
            <td><h1><span className="txt-primary"> {Heading1}</span> {SubHeading}</h1></td>
          </tr>
          <tr>
            <td><code>{'<h2></h2>'}</code></td>
            <td><h2><span className="txt-secondary"> {Heading1}</span> {SubHeading}</h2></td>
          </tr>
          <tr>
            <td><code>{'<h3></h3>'}</code></td>
            <td><h3><span className="txt-success">{Heading1}</span> {SubHeading}</h3></td>
          </tr>
          <tr>
            <td><code>{'<h4></h4>'}</code></td>
            <td><h4><span className="txt-info">{Heading1}</span> {SubHeading}</h4></td>
          </tr>
          <tr>
            <td><code>{'<h5></h5>'}</code></td>
            <td><h5><span className="txt-warning">{Heading1}</span> {SubHeading}</h5></td>
          </tr>
          <tr>
            <td className="pb-0"><code>{'<h6></h6>'}</code></td>
            <td className="pb-0"><h5><span className="txt-danger"> {Heading1}</span> {SubHeading}</h5></td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default ColoredHeadingsBody;
