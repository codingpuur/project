import { CardBody, Collapse, ListGroup } from "reactstrap";
import { numbers } from "@/Data/Apps/SocialApp/SocialAppData";
import { ImagePath } from "@/Constant";
import { FilterPropsType } from "@/Types/Apps/SocialApp";

const LatestPhotosCollapse: React.FC<FilterPropsType> = ({ isFilter }) => {
  return (
    <Collapse isOpen={isFilter}>
      <CardBody className='avatar-showcase filter-cards-view'>
        <ListGroup className='text-center flex-row'>
          {numbers.map((data, index) => (
            <li key={index}>
              <div className='latest-post'>
                <img className='img-fluid' alt='user' src={`${ImagePath}/social-app/post-${data}.png`}/>
              </div>
            </li>
          ))}
        </ListGroup>
      </CardBody>
    </Collapse>
  );
};

export default LatestPhotosCollapse;
