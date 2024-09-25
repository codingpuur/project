import { Button, Col } from "reactstrap";
import { Href, TaskFilter } from "@/utils/Constant";
import { useState } from "react";
import ViewsLeftSidebar from "./ViewsLeftSidebar";
import { TasksPropsTypes } from "@/Types/Apps/TasksTypes";

const NavClass: React.FC<TasksPropsTypes> = ({ activeToggle }) => {
  const [sideBarOpen, setSideBarOpen] = useState(false);
  return (
    <Col xl={3} className='box-col-3'>
      <div className='md-sidebar'>
        <Button color='primary' className='md-sidebar-toggle' href={Href} onClick={() => setSideBarOpen(!sideBarOpen)}>
          {TaskFilter}
        </Button>
        <div className={`md-sidebar-aside job-left-aside custom-scrollbar ${sideBarOpen ? "open" : ""}`}>
          <div className='email-left-aside'>
            <ViewsLeftSidebar activeToggle={activeToggle} />
          </div>
        </div>
      </div>
    </Col>
  );
};

export default NavClass;
