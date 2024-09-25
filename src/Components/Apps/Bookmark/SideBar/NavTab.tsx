import { Button, Nav } from "reactstrap";
import { Bookmark, PlusCircle } from "react-feather";
import { Href, NewBookmark, Tags, Views } from "@/utils/Constant";
import { sideBarData, sideBarData2 } from "@/Data/Apps/Bookmark/BookmarkData";
import BookmarkModal from "./BookmarkModal";
import ModalTag from "./ModalTag";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { setAddModal, setTagModal, updateActiveTabs } from "@/Redux/Reducer/BookmarkTabSlice";

const NavTab = () => {
  const { activeTabs } = useAppSelector((state) => state.bookmarkTab);
  const dispatch = useAppDispatch();
  const onHandleClick = (id: string) => {
    dispatch(updateActiveTabs(id));
  };
  return (
    <Nav className='main-menu' role='tablist'>
      <li>
        <Button className='badge-light-primary d-block w-100 btn-mail txt-primary' color='transparent' onClick={() => dispatch(setAddModal())}>
          <Bookmark className='me-2' />
          {NewBookmark}
          <BookmarkModal />
        </Button>
      </li>
      <li>
        <span className='main-title f-w-700'>{Views}</span>
      </li>
      {sideBarData.map((data, index) => (
        <li key={index}>
          <a className={`show ${activeTabs === data.value ? "active" : ""}`} onClick={() => onHandleClick(data.value)} href={Href}>
            <span className='title'> {data.tittle}</span>
          </a>
        </li>
      ))}
      <li>
        <hr />
      </li>
      <li>
        <span className='main-title f-w-700'>
          {Tags}
          <span className='pull-right' onClick={() => dispatch(setTagModal())}>
            <a href={Href}>
              <PlusCircle />
            </a>
          </span>
        </span>
      </li>
      <ModalTag />
      {sideBarData2.map((data, index) => (
        <li key={index}>
          <a className={`show ${activeTabs === data.value ? "active" : ""}`} onClick={() => onHandleClick(data.value)} href={Href}>
            <span className='title'> {data.tittle}</span>
          </a>
        </li>
      ))}
    </Nav>
  );
};

export default NavTab;
