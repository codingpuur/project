import { Nav, Pagination, PaginationItem, PaginationLink } from "reactstrap";
import { Href } from "@/utils/Constant";
import { alignPageData } from "@/Data/BonusUi/Pagination/PaginationData";

const DefaultPagination = () => {
  return (
    <Nav className='m-b-30'>
      <Pagination className='pagin-border-warning pagination-warning'>
        {alignPageData &&
          alignPageData.map((item, index) => (
            <PaginationItem key={index}>
              <PaginationLink href={Href}>{item}</PaginationLink>
            </PaginationItem>
          ))}
      </Pagination>
    </Nav>
  );
};

export default DefaultPagination;
