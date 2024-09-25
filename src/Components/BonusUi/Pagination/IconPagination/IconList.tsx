import { Nav, Pagination, PaginationItem, PaginationLink } from "reactstrap";
import { Href } from "@/utils/Constant";
import { iconListData } from "@/Data/BonusUi/Pagination/PaginationData";

const IconList = () => {
  return (
    <Nav>
      <Pagination className='pagination-secondary pagin-border-secondary'>
        <PaginationItem>
          <PaginationLink first href={Href} />
        </PaginationItem>
        {iconListData &&
          iconListData.map((item, index) => (
            <PaginationItem key={index}>
              <PaginationLink href={Href}>{item.text}</PaginationLink>
            </PaginationItem>
          ))}
        <PaginationItem>
          <PaginationLink href={Href} last />
        </PaginationItem>
      </Pagination>
    </Nav>
  );
};

export default IconList;
