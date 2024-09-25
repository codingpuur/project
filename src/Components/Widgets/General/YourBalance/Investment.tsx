import { yourBalanceData } from "@/Data/Widgets/General/General";
import FeatherIcons from "@/utils/CommonSvgIcon/FeatherIcons";
import { Badge } from "reactstrap";

const Investment = () => {
  return (
    <ul className="flex-row">
      {yourBalanceData.map((data,index) => (
        <li key={index}>
          <div className={`balance-item ${data.class}`}>
            <div className="balance-icon-wrap">
              <div className="balance-icon">
                <FeatherIcons iconName={data.arrow} />
              </div>
            </div>
            <div>
              <span className="f-14 f-light">{data.header}</span>
              <h5>{data.amount}</h5>
              <Badge pill className={`badge-light-${data.class}`} color="transperant">
                {data.badge}
              </Badge>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Investment;
