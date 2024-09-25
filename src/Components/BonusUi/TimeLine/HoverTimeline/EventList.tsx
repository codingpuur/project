import Image from "next/image";
import { MollyBoake } from "@/utils/Constant";
import { ImagePath } from "@/Constant";
import { ListGroup, ListGroupItem } from "reactstrap";

const EventList = () => {
  return (
    <ListGroup className='main-lists-content'>
      <ListGroupItem className='list-group-item-action border-0 p-0 mb-4' aria-current='true'>
        <div className='d-flex w-100 justify-content-between align-items-center'>
          <div className='list-wrapper'>
            <Image className='list-img' src={`${ImagePath}/user/1.jpg`} alt='profile' height={120} width={120}/>
            <div className='list-content'>
              <h3>{MollyBoake}</h3>
              <p>{"MollyBoake@rhyta.com"}</p>
            </div>
          </div>
          <div className='timeline-icon'>
            <i className='icon-facebook' />
            <i className='icon-google' />
            <i className='icon-twitter-alt' />
          </div>
        </div>
        <p className='mb-1'>{"Next step is to choose a tone of voice for your content type."}</p>
      </ListGroupItem>
    </ListGroup>
  );
};

export default EventList;
