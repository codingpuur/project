import { Alert, Table } from "reactstrap";
import DismissibleAlert from "./DismissibleAlert";
import { alertTableData } from "@/Data/Tables/ReactStrapTables/TableComponentData";

const AlertTable = () => {
  return (
    <Table bordered>
      <tbody>
        {alertTableData.map((data, index) => (
          <tr key={index}>
            <td>{data.title}</td>
            <td className='w-50'>
              <Alert color={data.color}>
                <p dangerouslySetInnerHTML={{ __html: data.tableColData }}></p>
              </Alert>
            </td>
            <td>
              <p dangerouslySetInnerHTML={{ __html: data.details }}></p>
            </td>
          </tr>
        ))}
        <DismissibleAlert />
      </tbody>
    </Table>
  );
};

export default AlertTable;
