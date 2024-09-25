import { TotalUsers } from "@/Data/Widgets/General/General";
import FeatherIcons from "@/utils/CommonSvgIcon/FeatherIcons";

const TotalUsersBody = () => {
  return (
    <ul className='user-list flex-row'>
      {TotalUsers.map((data, i) => (
        <li key={i}>
          <div className={`user-icon ${data.color}`}>
            <div className='user-box'>
              <FeatherIcons className={`font-primary`} iconName={data.fIcon} />
            </div>
          </div>
          <div>
            <h5 className='mb-1'>{data.count}</h5>
            <span className={`font-${data.fontcolor} d-flex align-items-center`}>
              <i className={`${data.icon} icon-rotate me-1`}> </i>
              <span className='f-w-600'>{data.result}</span>
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TotalUsersBody;
