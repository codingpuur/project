import SearchBar from "./SearchBar/SearchBar";
import HeaderLogo from "./HeaderLogo/HeaderLogo";
import { Row } from "reactstrap";
import RightHeader from "./RightHeader/RightHeader";

const Header = () => {
  return (
    <Row className='header-wrapper'>
      <HeaderLogo />
      <SearchBar />
      <RightHeader />
    </Row>
  );
};

export default Header;
