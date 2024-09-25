import { inputTableData } from "@/Data/Tables/ReactStrapTables/TableComponentData";
import { Input, Table } from "reactstrap";

const InputTable = () => {
  return (
    <Table bordered className='checkbox-td-width'>
      <tbody>
        {inputTableData.map((data, index) => (
          <tr key={index}>
            <td>{data.title}</td>
            <td className='w-50'>
              <Input className={data.class} id='example{index}' type='email' placeholder='Input text' />
            </td>
            <td>
              <span>{data.details}</span>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default InputTable;
