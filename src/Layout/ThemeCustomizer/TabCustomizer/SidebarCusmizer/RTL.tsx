import CommonUL from "./CommonUL/CommonUL";
import { Badge } from "reactstrap";
import { LtrDataType } from "@/Types/ThemeCustomizerTypes";

const RTL:React.FC<LtrDataType> = ({ handleLayout, layout_type }) => {
  return (
    <li className={`${layout_type === "rtl" ? "active" : ""}`} onClick={() => handleLayout("rtl")}>
      <div className="header bg-light">
        <CommonUL />
      </div>
      <div className="body">
        <ul className="simple-list flex-row">
          <li className="bg-light body">
            <Badge color="primary">{'RTL'}</Badge>
          </li>
          <li className="bg-light sidebar"></li>
        </ul>
      </div>
    </li>
  );
};

export default RTL;
