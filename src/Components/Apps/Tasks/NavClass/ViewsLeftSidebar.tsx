import { Card, CardBody, Nav, NavItem } from "reactstrap";
import { Href, Views } from "@/utils/Constant";
import HeaderProfile from "./HeaderProfile";
import TagsLeftSidebar from "./TagsLeftSidebar";
import { taskData } from "@/Data/Apps/Tasks/TasksData";
import NewTaskClass from "./NewTaskClass";
import { TasksPropsTypes } from "@/Types/Apps/TasksTypes";
import { useAppSelector } from "@/Redux/Hooks";
import Link from "next/link";

const ViewsLeftSidebar:React.FC<TasksPropsTypes> = ({ activeToggle}) => {
  const {activeTab} = useAppSelector((state)=>state.tasks)
  return (
    <Card>
      <CardBody>
        <div className="email-app-sidebar left-bookmark task-sidebar">
          <HeaderProfile />
          <Nav className="main-menu" role="tablist">
            <NavItem>
              <NewTaskClass />
            </NavItem>
            <NavItem>
              <span className="main-title">{Views}</span>
            </NavItem>
            {taskData.map((item) => (
              <NavItem key={item.id}>
                <Link
                  href={Href}
                  className={activeTab === item.activeTab ? "active" : ""}
                  onClick={() => {activeToggle(item.activeTab)}}
                >
                  <span className="title"> {item.title}</span>
                </Link>
              </NavItem>
            ))}
            <NavItem>
              <hr />
            </NavItem>
            <TagsLeftSidebar activeTab={activeTab} activeToggle={activeToggle} />
          </Nav>
        </div>
      </CardBody>
    </Card>
  );
};

export default ViewsLeftSidebar;
