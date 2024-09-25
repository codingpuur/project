import { Col, Row } from "reactstrap";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { setBookMarkClass } from "@/Redux/Reducer/BookmarkSlice";
import SVG from "@/utils/CommonSvgIcon/SVG";
import { AddNewBookmark, Bookmarks, Href } from "@/utils/Constant";

const BookmarkBox = (props: any) => {
  const { bookmarkItems} = props;
  const dispatch = useAppDispatch();
  const { sidebarIconType } = useAppSelector((state) => state.themeCustomizer);
  return (
    <div className="front">
      <h3 className="f-18 mb-0 dropdown-title">{Bookmarks}</h3>
      <ul className="bookmark-dropdown simple-list">
        <li>
          <Row>
            {bookmarkItems?.map((item: any, index: number) => (
              <Col xs={4} className="text-center" key={index}>
                <Link href={item.link}>
                  <div className="bookmark-content">
                    <div className="bookmark-icon">
                      <SVG className={`${sidebarIconType}-icon`} iconId={item.icon1  === "home" ? item.icon1 : `${sidebarIconType}-${item.icon1}`} />
                    </div>
                    <span>{item.title}</span>
                  </div>
                </Link>
              </Col>
            ))}
          </Row>
        </li>
        <li className="text-centermedia-body check-button" onClick={()=>dispatch(setBookMarkClass())}>
          <Link className="flip-btn f-w-500" id="flip-btn" href={Href}>{AddNewBookmark}</Link>
        </li>
      </ul>
    </div>
  );
};

export default BookmarkBox;
