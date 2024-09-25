import { SidebarTypeProp } from "@/Types/ThemeCustomizerTypes";
import CommonUL from "../CommonUL/CommonUL";

const Vertical = ({ handleSidebarType, layout }: SidebarTypeProp) => {
  return (
    <li data-attr="normal-sidebar" className={`border-0 ${layout === "horizontal-wrapper" ? "active" : ""}`} onClick={() => handleSidebarType("horizontal-wrapper")} >
      <div className="header bg-light">
        <CommonUL />
      </div>
      <div className="body">
        <ul className="simple-list">
          <li className="bg-dark sidebar"></li>
          <li className="bg-light body"></li>
        </ul>
      </div>
    </li>
  );
};

export default Vertical;
