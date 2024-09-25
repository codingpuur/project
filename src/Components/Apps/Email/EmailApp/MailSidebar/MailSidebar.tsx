import { Badge, Card, CardBody } from "reactstrap";
import { Href, Inbox, NewMail } from "@/utils/Constant";
import DynamicEmailSideBar from "./DynamicEmailSideBar";
import Link from "next/link";
import HeaderProfile from "./HeaderProfile";

interface PropsTypes {
  path: string;
}
const MailSidebar: React.FC<PropsTypes> = ({ path }) => {
  return (
    <div className='email-left-aside'>
      <Card>
        <CardBody>
          <div className='email-app-sidebar'>
            <HeaderProfile />
            <ul className='nav main-menu ' role='tablist'>
              <li className='nav-item'>
                <Link className='btn-primary btn-block btn-mail w-100' href={`/email/${path}`}>
                  <i className='icofont icofont-envelope me-2'></i> {NewMail}
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='show' href={Href}>
                  <span className='title'>
                    <i className='icon-import'></i> {Inbox}
                  </span>
                  <Badge color='' className='pull-right email-badge'>
                    (236)
                  </Badge>
                </Link>
              </li>
              <DynamicEmailSideBar />
            </ul>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default MailSidebar;
