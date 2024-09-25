import { Badge } from "reactstrap";
import CommonUL from "./CommonUL/CommonUL";
import { LtrDataType } from "@/Types/ThemeCustomizerTypes";

const LTR:React.FC<LtrDataType> = ({ handleLayout, layout_type }) => {
  return (
    <li className={`border-0 ${layout_type === "ltr" ? "active" : ""}`} data-attr='ltr'onClick={() => {handleLayout("ltr");}}>
      <div className='header bg-light'>
        <CommonUL />
      </div>
      <div className='body'>
        <ul className='simle-list flex-row'>
          <li className='bg-light sidebar'></li>
          <li className='bg-light body'>
            <Badge color='primary'>{"LTR"}</Badge>
          </li>
        </ul>
      </div>
    </li>
  );
};

export default LTR;
