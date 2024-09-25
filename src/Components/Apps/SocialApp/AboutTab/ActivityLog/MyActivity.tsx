import { AboutPropsType } from "@/Types/Apps/SocialApp";
import { activityLogData } from "@/Data/Apps/SocialApp/SocialAppData";

const MyActivity:React.FC<AboutPropsType> = ({ Heading }) => {
  return (
    <div className='my-activity'>
      <h3 className='f-w-600 mb-3'>{Heading}</h3>
      {activityLogData.map((item) => (
        <p key={item.id}>
          <span>{item.icon}</span>
          {item.description}
        </p>
      ))}
    </div>
  );
};

export default MyActivity;
