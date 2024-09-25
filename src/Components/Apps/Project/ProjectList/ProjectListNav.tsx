import { Card, Col, Nav, NavItem, NavLink, Row } from "reactstrap";
import { CheckCircle, Info, Target } from "react-feather";
import { All, Doing, Done } from "@/utils/Constant";
import CreateNewProject from "./CreateNewProject";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { setActiveTab } from "@/Redux/Reducer/ProjectSlice";
const ProjectListNav = () => {
  const { activeTab } = useAppSelector((state) => state.project);
  const dispatch = useAppDispatch();
  return (
    <Card>
      <Row>
        <Col md={6}>
          <Nav tabs className='border-tab'>
            <NavItem>
              <NavLink className={activeTab === "1" ? "active" : ""} onClick={() => dispatch(setActiveTab("1"))}>
                <Target />
                {All}
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className={activeTab === "2" ? "active" : ""} onClick={() => dispatch(setActiveTab("2"))}>
                <Info />
                {Doing}
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className={activeTab === "3" ? "active" : ""} onClick={() => dispatch(setActiveTab("3"))}>
                {" "}
                <CheckCircle /> {Done}
              </NavLink>
            </NavItem>
          </Nav>
        </Col>
        <CreateNewProject />
      </Row>
    </Card>
  );
};

export default ProjectListNav;
