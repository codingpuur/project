import { Nav, Pagination, PaginationItem, PaginationLink } from "reactstrap";
import { Href } from "@/utils/Constant";
import { alignPageData } from "@/Data/BonusUi/Pagination/PaginationData";

const MediumPage = () => {
  return (
    <Nav className='m-b-30'>
      <Pagination className='pagination-md pagination-warning pagin-border-warning'>
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

export default MediumPage;
