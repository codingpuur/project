import { Card, CardBody, CardHeader, TabPane } from "reactstrap";
import ViewBookmark from "../BookmarksTabs/ViewBookmark";
import { NoBookmarksFound } from "@/utils/Constant";
import { CommonTabCardProp } from "@/Types/Apps/BookmarkTypes";

const CommonTabCard: React.FC<CommonTabCardProp> = ({ tabId, title }) => {
  return (
    <TabPane tabId={tabId}>
      <Card className='mb-0'>
        <CardHeader className='d-flex'>
          <h3 className='mb-0'>{title}</h3>
          <ViewBookmark />
        </CardHeader>
        <CardBody>
          <div className='details-bookmark text-center'>
            <div className='no-favourite'>
              <span>{NoBookmarksFound}</span>
            </div>
          </div>
        </CardBody>
      </Card>
    </TabPane>
  );
};

export default CommonTabCard;
