import { notification } from "@/Data/Layout/Header/NotificationData";
import { CheckAll } from "@/utils/Constant";
import Link from "next/link";

const NotificationBox = () => {
  return (
    <ul className="simple-list">
      {notification.map((data, index) => (
        <li className={`b-l-${data.symbol} border-4 mt-3`} key={index}>
          <Link href={data.href}>
            <p>
              {data.notificationsTittle}
              <span className={`font-${data.fontColor}`}>
                {data.notificationsTime}
              </span>
            </p>
          </Link>
        </li>
      ))}
      <li>
        <Link className="f-w-700" href={`/email/emailapp`}>
          {CheckAll}
        </Link>
      </li>
    </ul>
  );
};

export default NotificationBox;
