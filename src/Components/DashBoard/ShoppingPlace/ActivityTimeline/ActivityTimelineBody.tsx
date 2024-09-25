import { Badge } from "reactstrap";
import { timeLineData } from "@/Data/Dashboard/ShoppingPlace/TimeLine";
import Image from "next/image";
import { ImagePath } from "@/Constant";

const ActivityTimelineBody = () => {
  return (
    <div className="activity-timeline">
      {timeLineData.map((data,index) => (
        <div className="d-flex align-items-start" key={index}>
          <div className="activity-line"></div>
          <div className={`activity-dot-${data.color}`}></div>
          <div className="flex-grow-1">
            <p className="todo-font">
              <span className={`font-${data.color}`}>{data.date}</span>
              {data.day}
              {data.badge && <Badge color="secondary" className="ms-2">{data.badge}</Badge>}
            </p> 
            <span className="f-w-700">{data.Product}</span>
            <p className="mb-0">{data.describe}</p>
            {data.img && <ul className="img-wrapper flex-row custom-product-timeline">
                <li>
                    <Image
                        className="img-30 img-fluid"
                        src={`${ImagePath}/dashboard/04.png`}
                        alt=""
                        height={39} width={30}
                    />
                </li>
                <li>
                    <Image
                        className="img-fluid"
                        src={`${ImagePath}/dashboard/09.png`}
                        alt=""
                        height={38} width={43}
                    />
                </li>
            </ul>}
          </div>
          <i className={`fa fa-circle circle-dot-${data.color} pull-right`}></i>
        </div>
      ))} 
    </div>
  );
};

export default ActivityTimelineBody;
