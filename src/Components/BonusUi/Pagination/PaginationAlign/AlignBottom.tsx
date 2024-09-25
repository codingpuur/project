import { alignbottomData } from "@/Data/BonusUi/Pagination/PaginationData";
import { Nav, Pagination, PaginationItem, PaginationLink } from "reactstrap";

const AlignBottom = () => {
  return (
    <Nav className='d-flex justify-content-end'>
      <Pagination className='pagin-border-success pagination-success'>
        {alignbottomData &&
          alignbottomData.map((item, index) => (
            <PaginationItem key={index}>
              <PaginationLink href='#'>{item}</PaginationLink>
            </PaginationItem>
          ))}
      </Pagination>
    </Nav>
  );
};

export default AlignBottom;
