import { useAppDispatch } from "@/Redux/Hooks";
import { Href } from "@/utils/Constant";
import { Grid, List } from "react-feather";
import { setGridView } from "@/Redux/Reducer/BookmarkTabSlice";

const ViewBookmark = () => {
  const dispatch = useAppDispatch();
  const gridBookmark = () => dispatch(() => dispatch(setGridView(true)));
  const listBookmark = () => dispatch(() => dispatch(setGridView(false)));
  return (
    <ul className='flex-row'>
      <li>
        <a className='grid-bookmark-view' href={Href}>
          <Grid onClick={gridBookmark} />
        </a>
      </li>
      <li>
        <a className='list-layout-view' href={Href}>
          <List onClick={listBookmark} />
        </a>
      </li>
    </ul>
  );
};

export default ViewBookmark;
