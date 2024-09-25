import { Input, Label } from "reactstrap";
import { BasicRadioButton, DefaultRadio } from "@/utils/Constant";

const BasicRadioButtons = () => {
  return (
    <tr>
      <td>{BasicRadioButton}</td>
      <td className='w-50'>
        <Input id='radio' type='radio' />
        <Label for='radio'>{DefaultRadio}</Label>
      </td>
      <td>
        <span>{BasicRadioButton}</span>
      </td>
    </tr>
  );
};

export default BasicRadioButtons;
