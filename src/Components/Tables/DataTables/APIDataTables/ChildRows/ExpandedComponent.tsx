import { ExpanderComponentProps } from "react-data-table-component";
import { Table } from "reactstrap";
import { ExtraInfo, FullName, Id } from "@/utils/Constant";
import { ZeroConfigurationTableColumnsType } from "@/Types/DataTablesTypes";

const ExpandedComponent: React.FC<ExpanderComponentProps<ZeroConfigurationTableColumnsType>> = ({ data }) => {
  return (
    <Table cellPadding={5} cellSpacing={0} border={0} style={{ paddingLeft: 50 }}>
      <tbody>
        <tr>
          <td>{Id}:</td>
          <td>{data.id}</td>
        </tr>
        <tr>
          <td>{FullName}:</td>
          <td>{data.name}</td>
        </tr>
        <tr>
          <td>{ExtraInfo}:</td>
          <td>{"And any further details here (images etc)..."}</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default ExpandedComponent;
