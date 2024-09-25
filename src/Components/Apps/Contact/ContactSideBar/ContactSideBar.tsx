import { Button, Card, CardBody } from "reactstrap";
import { ContactFilter } from "@/utils/Constant";
import NavComponent from "./NavComponent";
import { ContactSidebarCallbackProp } from "@/Types/Apps/ContactTypes";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { setContactFilter } from "@/Redux/Reducer/ContactSlice";
import Image from "next/image";
import { ImagePath } from "@/Constant";

const ContactSideBar:React.FC<ContactSidebarCallbackProp> = ({ callback }) => {
  const { contactFilter } = useAppSelector((state) => state.contact);
  const dispatch = useAppDispatch();
  return (
    <div className="md-sidebar">
      <Button
        tag="a"
        color="primary"
        className="md-sidebar-toggle"
        onClick={() => dispatch(setContactFilter())}
      >
        {ContactFilter}
      </Button>
      <div className={`md-sidebar-aside job-left-aside custom-scrollbar ${contactFilter ? "open" : ""}`} >
        <div className="email-left-aside">
          <Card>
            <CardBody>
              <div className="email-app-sidebar left-bookmark">
                <div className="d-flex">
                  <div className="d-flex-size-email">
                    <Image className="me-3 rounded-circle" src={`${ImagePath}/user/user.png`} alt="" width={48} height={48}/>
                  </div>
                  <div className="flex-grow-1">
                    <h3 className="f-w-600">{'MARK JENCO'}</h3>
                    <p>{'Markjecno@gmail.com'}</p>
                  </div>
                </div>
                <NavComponent callbackActive={callback} />
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ContactSideBar;
