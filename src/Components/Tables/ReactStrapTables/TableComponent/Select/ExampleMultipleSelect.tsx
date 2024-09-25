import { Input } from "reactstrap";
import { Examplemultipleselect } from "@/utils/Constant";

const ExampleMultipleSelect = () => {
  return (
    <>
      <tr>
        <td>{Examplemultipleselect}</td>
        <td>
          <Input type='select' id='exampleFormControlSelect22' defaultValue='1'>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </td>
        <td>
          <span>
            Use for multi select control add code <code>multiple</code>on select.
          </span>
        </td>
      </tr>
    </>
  );
};

export default ExampleMultipleSelect;
