import { Badge } from "reactstrap";
import FeatherIcons from "@/utils/CommonSvgIcon/FeatherIcons";
import { Investment_Constant } from "@/utils/Constant";

const Investment = () => {
  return (
    <li>
      <div className="balance-item danger">
        <div className="balance-icon-wrap">
          <div className="balance-icon">
            <FeatherIcons iconName="ArrowDownRight" />
          </div>
        </div>
        <div>
          <span className="f-12 f-LIght">{Investment_Constant} </span>
          <h5>78.8K</h5>
          <Badge pill className="badge-light-danger" color="">-11.67%</Badge>
        </div>
      </div>
    </li>
  );
};

export default Investment;
