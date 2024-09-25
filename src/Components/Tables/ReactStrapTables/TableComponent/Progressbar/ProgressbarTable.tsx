import { progressTableData } from "@/Data/Tables/ReactStrapTables/TableComponentData";
import { Progress, Table } from "reactstrap";

const ProgressbarTable = () => {
  return (
    <Table bordered className='checkbox-td-width'>
      <tbody>
        {progressTableData.map((data, index) => (
          <tr key={index}>
            <td>{data.title}</td>
            <td className='w-50'>
              <Progress size={data.size} value={75} color='primary' striped={data.striped} />
            </td>
            <td>
              <span dangerouslySetInnerHTML={{ __html: data.details }} />
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default ProgressbarTable;
