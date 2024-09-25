import { FormGroup, Input, Label } from "reactstrap";
import { InlineCheckboxs } from "@/utils/Constant";

const InlineCheckbox = () => {
  const checkboxColor = ["primary", "secondary", "success"];
  return (
    <tr>
      <td>{InlineCheckboxs}</td>
      <td>
        <FormGroup className='m-b-0 m-checkbox-inline'>
          {checkboxColor.map((data, index) => (
            <div className={`checkbox checkbox-${data}`} key={index}>
              <Input id='inline-{index}' type='checkbox' />
              <Label for='inline-{index}'>{"Option 1"}</Label>
            </div>
          ))}
        </FormGroup>
      </td>
      <td>
        <span>
          Wrap with use<code>disabled</code>,<code>primary, secondary, success, info, warning, danger, light, dark</code>for this style of checkbox disable.
        </span>
      </td>
    </tr>
  );
};

export default InlineCheckbox;
