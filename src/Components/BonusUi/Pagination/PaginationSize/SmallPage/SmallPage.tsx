import { Nav, Pagination, PaginationItem, PaginationLink } from "reactstrap";
import { Href } from "@/utils/Constant";
import { alignPageData } from "@/Data/BonusUi/Pagination/PaginationData";

const SmallPage = () => {
  return (
    <Nav>
      <Pagination size='sm' className='pagination-warning pagin-border-warning'>
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

export default SmallPage;
