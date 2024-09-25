import { SidebarTypeProp } from "@/Types/ThemeCustomizerTypes";
import CommonUL from "../CommonUL/CommonUL";

const Horizontal: React.FC<SidebarTypeProp> = ({ handleSidebarType, layout }) => {
  return (
    <li data-attr='compact-sidebar' className={`border-0 ${layout === "material-icon" ? "active" : ""}`} onClick={() => handleSidebarType("material-icon")}>
      <div className='header bg-light'>
        <CommonUL />
      </div>
      <div className='body'>
        <ul className='flex-row'>
          <li className='bg-dark sidebar compact'></li>
          <li className='bg-light body'></li>
        </ul>
      </div>
    </li>
  );
};

export default Horizontal;
