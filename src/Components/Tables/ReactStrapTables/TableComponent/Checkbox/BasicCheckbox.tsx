import { Input, Label } from "reactstrap";
import { BasicCheckboxs, Default } from "@/utils/Constant";

const BasicCheckbox = () => {
  return (
    <tr>
      <td>{BasicCheckboxs}</td>
      <td className='w-50'>
        <Input id='checkbox1' type='checkbox' />
        <Label for='checkbox1'>{Default}</Label>
      </td>
      <td>
        <span>{BasicCheckboxs}</span>
      </td>
    </tr>
  );
};

export default BasicCheckbox;
