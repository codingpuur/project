import { Input, Label } from "reactstrap";
import { InlineCheckboxs } from "@/utils/Constant";

const InlineCheckbox = () => {
  const radioColor = ["primary", "secondary", "success"];
  return (
    <tr>
      <td>{InlineCheckboxs}</td>
      <td>
        <div className='form-group m-b-0 m-checkbox-inline'>
          {radioColor.map((data, index) => (
            <div className={`radio radio-${data}`} key={index}>
              <Input id={`radioInline${index}`} type='radio' name='radio1' value='option1' />
              <Label for={`radioInline${index}`}>{"Option 1"}</Label>
            </div>
          ))}
        </div>
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
