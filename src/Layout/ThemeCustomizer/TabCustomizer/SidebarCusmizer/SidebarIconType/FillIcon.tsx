import CommonUL from "../CommonUL/CommonUL";
import { Badge } from "reactstrap";
import { SidebarIconProp } from "@/Types/ThemeCustomizerTypes";

const FillIcon:React.FC<SidebarIconProp> = ({ handleSideBarIconType, sideBarIconType }) => {
  return (
    <li data-attr="fill-svg" className={`border-0 ${sideBarIconType === "fill" ? "active" : ""}`} onClick={() => handleSideBarIconType("fill")} >
      <div className="header bg-light">
        <CommonUL />
      </div>
      <div className="body bg-light">
        <Badge color="primary">{'Fill'}</Badge>
      </div>
    </li>
  );
};

export default FillIcon;
