import { largeSelectModeData } from "@/Data/Tables/ReactStrapTables/TableComponentData";
import { LargeSelectModes } from "@/utils/Constant";
import { Input } from "reactstrap";

const LargeSelectMode = () => {
  return (
    <>
      <tr>
        <td>{LargeSelectModes}</td>
        <td>
          {largeSelectModeData.map((data, index) => (
            <Input type='select' className='mb-10 {selectItem.class}' id={data.id} defaultValue='1' key={index}>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Input>
          ))}
        </td>
        <td>
          <span>
            Use for large and small select control add class<code>form-control-*</code>
            <code>lg, sm</code>.
          </span>
        </td>
      </tr>
    </>
  );
};

export default LargeSelectMode;
