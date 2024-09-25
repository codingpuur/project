import { useState } from 'react';
import { Col, Nav, NavLink } from 'reactstrap';
import SearchNotFoundClass from './SearchNotFoundClass';
import { ListNewContactPropsType, UserCallbackUser } from '@/Types/Apps/ContactTypes';
import Image from 'next/image';

const ListNewContact:React.FC<ListNewContactPropsType> = ({ users, userCallback }) => {
  const [dynamictab, setDynamicTab] = useState(0);
  const ContactDetails = (user:UserCallbackUser) => {
    userCallback({ id: user.id, name: user.name, surename: user.surename, avatar: user.avatar, mobile: user.mobile });
  };
  return (
    <Col xl={4} md={5} className='xl-50'>
        <Nav className="flex-column nav-pills">
          {users.length > 0 ?
            users.map((user:UserCallbackUser, index:number) => {
              return (
                <NavLink className={dynamictab === index ? 'active' : ''} onClick={() => setDynamicTab(index)} key={index} >
                  <div className='d-flex' onClick={() => ContactDetails(user)}>
                    <Image className= 'p-0 img-fluid img-50 m-r-20 rounded-circle update_img_0' src= {`${user.avatar}`} alt= 'userImage' width={50} height={50}/>
                    <div className='flex-grow-1' >
                      <h3>
                        <span className="first_name_0">{user.name}</span>
                        <span className="last_name_0">{user.surename}</span>
                      </h3>
                      <p className= 'email_add_0' >{user.name}{'@gmail.com'}</p>
                    </div>
                  </div>
                </NavLink>
              );
            })
            :
            <SearchNotFoundClass />
          }
        </Nav>
    </Col>
  )
}

export default ListNewContact