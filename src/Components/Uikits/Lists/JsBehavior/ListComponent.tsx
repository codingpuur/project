import { ListActiveProps } from '@/Types/uikitsType';
import { Contactus, Home, Profile, Settings } from '@/utils/Constant';
import { ListGroup, ListGroupItem } from 'reactstrap';
 
const ListComponent:React.FC<ListActiveProps> = ({ activeList, setActiveList }) => {
  return (
    <ListGroup>
        <ListGroupItem className={`list-group-item-action bg-primary ${activeList === '1' ? 'active' : ""}`} onClick={() => setActiveList('1')}>{Home}</ListGroupItem>
        <ListGroupItem className={`list-group-item-action list-hover-primary ${activeList === '2' ? 'active' : ""}`} onClick={() => setActiveList('2') }>{Profile}</ListGroupItem>
        <ListGroupItem className={`list-group-item-action list-hover-primary ${activeList === '3' ? 'active' : ""}`} onClick={() => setActiveList('3')}>{Contactus}</ListGroupItem>
        <ListGroupItem className={`list-group-item-action list-hover-primary ${activeList === '4' ? 'active' : ""}`} onClick={() => setActiveList('4') }>{Settings}</ListGroupItem>
    </ListGroup>
  )
}

export default ListComponent