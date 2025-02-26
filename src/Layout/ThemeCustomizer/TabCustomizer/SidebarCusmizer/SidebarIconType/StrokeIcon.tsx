import { Badge } from "reactstrap";
import CommonUL from "../CommonUL/CommonUL";
import { SidebarIconProp } from "@/Types/ThemeCustomizerTypes";

const StrokeIcon:React.FC<SidebarIconProp> = ({ handleSideBarIconType, sideBarIconType }) => {
  return (
    <li data-attr="stroke-svg" className={`normal-sidebar border-0 ${sideBarIconType === "stroke" ? "active" : ""}`} onClick={() => handleSideBarIconType("stroke")}>
      <div className="header bg-light">
        <CommonUL />
      </div>
      <div className="body bg-light">
        <Badge color="primary">{'Stroke'}</Badge>
      </div>
    </li>
  );
};

export default StrokeIcon;
