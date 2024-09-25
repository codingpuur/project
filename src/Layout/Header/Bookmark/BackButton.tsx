import Link from "next/link";
import { setBookMarkClass } from "@/Redux/Reducer/BookmarkSlice";
import { useAppDispatch } from "@/Redux/Hooks";
import { Back, Href } from "@/utils/Constant";

const BackButton = ({setSearchValue}:any) => {
  const dispatch = useAppDispatch();
  const handleBack = () => {
    dispatch(setBookMarkClass())
    setSearchValue("")
  }
  return (
    <li>
      <Link className="f-w-700 d-block flip-back" id="flip-back" href={Href} onClick={handleBack}>{Back}</Link>
    </li>
  );
};

export default BackButton;
