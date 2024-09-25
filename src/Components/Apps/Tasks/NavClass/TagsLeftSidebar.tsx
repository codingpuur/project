import { PlusCircle } from "react-feather";
import { NavItem } from "reactstrap";
import { tagData } from "@/Data/Apps/Tasks/TasksData";
import { Href, Tags } from "@/utils/Constant";
import { useCallback, useState } from "react";
import CreateTag from "./CreateTag";
import { TasksPropsType } from "@/Types/Apps/TasksTypes";
import Link from "next/link";


const TagsLeftSidebar:React.FC<TasksPropsType> = ({activeTab,activeToggle}) => {
  const [tagModal, setTagModal] = useState(false);
  const tagToggle = () => setTagModal(!tagModal);
  const tagCallback = useCallback((modal: boolean) => {
    setTagModal(modal);
  }, []);
  return (
    <>
      <NavItem>
        <span className="main-title">
          {" "}
          {Tags}
          <span className="pull-right" onClick={tagToggle}>
            <PlusCircle />
          </span>
        </span>
      </NavItem>
      <CreateTag tagCallback={tagCallback} tagModal={tagModal} />
      {tagData.map((item) => (
        <NavItem key={item.id}>
          <Link
            href={Href}
            className={activeTab === item.activeTab ? "show" : ""}
            onClick={() => {
              activeToggle(item.activeTab);
            }}
          >
            <span className="title"> {item.title}</span>
          </Link>
        </NavItem>
      ))}
    </>
  );
};

export default TagsLeftSidebar;
