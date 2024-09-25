import { switchColorData } from "@/Data/Tables/ReactStrapTables/TableComponentData";
import { Input, Label } from "reactstrap";

const SwitchOutline = () => {
  return (
    <>
      {switchColorData.map((data, index) => (
        <tr key={index}>
          <td>{data.title}</td>
          <td className='w-50'>
            <div className={`media-body icon-state ${data.mediaClass}`}>
              <Label className='switch'>
                <Input type='checkbox' defaultChecked />
                <span className='switch-state bg-primary'></span>
              </Label>
            </div>
          </td>
          <td dangerouslySetInnerHTML={{ __html: data.details }} />
        </tr>
      ))}
    </>
  );
};

export default SwitchOutline;
