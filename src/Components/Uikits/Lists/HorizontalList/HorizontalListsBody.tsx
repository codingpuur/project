import { horizontalListData } from "@/Data/Uikits/Lists/ListsData";
import { ListGroup, ListGroupItem } from "reactstrap";

const HorizontalListsBody = () => {
  return (
    <>
      {horizontalListData &&
        horizontalListData.map((item, index) => (
          <ListGroup className={`fw-bold list-group-horizontal-${item.size} pb-2`} key={index}>
            {item.listData.map((data, index) => (
              <ListGroupItem className={data.class} key={index}>
                {data.title}
              </ListGroupItem>
            ))}
          </ListGroup>
        ))}
    </>
  );
};

export default HorizontalListsBody;
