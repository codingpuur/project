import { Button, Card, CardBody, Nav, NavItem } from "reactstrap";
import { AllTask, Href, ToDoList, ToDofilter, TrashBin } from "@/utils/Constant";
import { useState } from "react";
import UserDetail from "./UserDetail";
import { CheckCircle, FilePlus, Trash } from "react-feather";
import Link from "next/link";
import WorkingTabs from "./WorkingTabs";

const TodoSideBar = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  return (
    <div className='email-sidebar md-sidebar'>
      <Button color='primary' className='email-aside-toggle md-sidebar-toggle' onClick={() => setShowSideBar(!showSideBar)}>
        {ToDofilter}
      </Button>
      <div className={`email-left-aside md-sidebar-aside ${showSideBar ? "open" : ""}`}>
        <div className='email-sidebar md-sidebar'>
          <div className={`email-left-aside md-sidebar-aside ${showSideBar ? "open" : ""}`}>
            <Card>
              <CardBody>
                <div className='email-app-sidebar left-bookmark custom-scrollbar'>
                  <UserDetail />
                  <Nav className='main-menu'>
                    <NavItem>
                      <Button color='primary' className='badge-light d-block btn-mail w-100'>
                        <CheckCircle className='me-2' /> {ToDoList}
                      </Button>
                    </NavItem>

                    <NavItem>
                      <Link href={Href}>
                        <span className='iconbg badge-light-primary'>
                        <FilePlus className='stroke-primary' />
                        </span>
                        <span className='title ms-2'>{AllTask}</span>
                      </Link>
                    </NavItem>
                    <WorkingTabs />
                    <NavItem>
                      <Link href={Href}>
                        <span className='iconbg badge-light-danger'>
                          <Trash className='stroke-danger' />
                        </span>
                        <span className='title ms-2'>{TrashBin}</span>
                      </Link>
                    </NavItem>
                  </Nav>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoSideBar;
