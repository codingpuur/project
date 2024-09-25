import { MenuInterface, SubMenuInterface } from '@/Types/BookmarkType';
import SVG from '@/utils/CommonSvgIcon/SVG';
import Link from 'next/link';
interface SearchSuggestionListProp {
  setSuggestionOpen: (key:boolean)=>void;
  suggestion: MenuInterface[] | SubMenuInterface[] | [];
  setSearchValue:(key:string)=> void
}
const SearchSuggestionList = ({ setSuggestionOpen, suggestion ,setSearchValue}: SearchSuggestionListProp) => {
  const handleLinkClick = () => {
    setSuggestionOpen(false)
    setSearchValue("")
    document.body.classList.remove("offcanvas");
  };
  return (
    <>
     {suggestion.map((item, i) => (
        <div className="ProfileCard u-cf" key={i}>
          <div className="ProfileCard-details">
            <div className="ProfileCard-realName">
              <Link className="realname  w-auto d-flex justify-content-start gap-2" href={`${item?.link}`} onClick={handleLinkClick}>
                <SVG iconId={`stroke-${item.icon}`} />
                {item.title}
              </Link>
            </div>
          </div>
        </div>
      ))}
      {!suggestion.length && <p>{"Your search turned up 0 results. This most likely means the backend is down, yikes!"}</p>}
    </>
  )
}

export default SearchSuggestionList