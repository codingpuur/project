import { Input, Label, Table } from "reactstrap";
import SwitchOutline from "./SwitchOutline";
import { switchTableData } from "@/Data/Tables/ReactStrapTables/TableComponentData";

const SwitchTable = () => {
  return (
    <Table bordered>
      <tbody>
        {switchTableData.map((data, index) => (
          <tr key={index}>
            <td className='pills-component'>{data.title}</td>
            <td className='w-50'>
              <Label className='switch'>
                <Input type='checkbox' defaultChecked={data.check ? true : false} disabled={data.disabled} />
                <span className='switch-state'></span>
              </Label>
            </td>
            <td>
              <span dangerouslySetInnerHTML={{ __html: data.details }} />
            </td>
          </tr>
        ))}
        <SwitchOutline />
      </tbody>
    </Table>
  );
};

export default SwitchTable;
