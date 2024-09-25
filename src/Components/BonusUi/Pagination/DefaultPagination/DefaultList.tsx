import { Nav, Pagination, PaginationItem, PaginationLink } from "reactstrap";
import { Href } from "@/utils/Constant";
import { defaultPagiData } from "@/Data/BonusUi/Pagination/PaginationData";

const DefaultList = () => {
  return (
    <Nav>
      <Pagination className='pagin-border-primary pagination-primary'>
        {defaultPagiData &&
          defaultPagiData.map((item, index) => (
            <PaginationItem className='pointer' key={index}>
              <PaginationLink href={Href}>
                {item.text}
                {item.text === "2" ? <span className='sr-only'>(current)</span> : ""}
              </PaginationLink>
            </PaginationItem>
          ))}
      </Pagination>
    </Nav>
  );
};

export default DefaultList;
