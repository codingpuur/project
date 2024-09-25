import { useCallback, useState } from 'react';
import SweetAlert from 'sweetalert2';
import { Delete, Edit, Emailaddress, General, History, Href, MobileNo, Name, Print } from '@/utils/Constant';
import SearchNotFoundClass from './SearchNotFoundClass';
import PrintModal from './PrintModal';
import { ContactDetailsPropsType, UserCallbackUser } from '@/Types/Apps/ContactTypes';
import { useAppDispatch, useAppSelector } from '@/Redux/Hooks';
import { deletedUser, setHistory, setTempId } from '@/Redux/Reducer/ContactSlice';
import Image from 'next/image';
import Link from 'next/link';

const ContactDetailsClass:React.FC<ContactDetailsPropsType> = ({ selectedUser, userEditCallback,setSelectedUser }) => {
  const {users} = useAppSelector((state)=> state.contact)
  const [printmodal, setPrintModal] = useState(false);
  const printModalToggle = () => setPrintModal(!printmodal);
  const dispatch=useAppDispatch()
  const toggleCallback = useCallback((toggle:boolean) => {
    setPrintModal(toggle);
  }, []);
    
  const editUsers = (usersData:UserCallbackUser) => {
    dispatch(setTempId(usersData.id));
    userEditCallback(true, usersData);
  };

  const deleteUser = (userId:number | undefined) => {
    SweetAlert.fire({
      title: 'Are you sure?',
      text: 'Once deleted, you will not be able to recover this imaginary file!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Ok',
      cancelButtonText: 'cancel',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        dispatch(deletedUser(userId));
        const newUsers= users.filter((user) => user.id !== userId)
        setSelectedUser(newUsers[newUsers.length - 1])
        SweetAlert.fire('Deleted!','Your file has been deleted.','success');
      } else {
        SweetAlert.fire('Your imaginary file is safe!');
      }
    });
  };
  return (
    <>
      {selectedUser ?
        <div className="profile-mail">
          <div className="d-flex">
            <Image className= 'img-100 img-fluid m-r-20 rounded-circle update_img_0' src= {`${selectedUser.avatar}`} alt= '' width={100} height={100}/>
            <div className="flex-grow-1 mt-0">
              <h3>
                <span className="first_name_0">{selectedUser.name}</span>
                <span className="last_name_0">{selectedUser.surename}</span>
              </h3>
              <p className='email_add_0'>{selectedUser.name}{'@gmail.com'}</p>
              <ul className='flex-row' >
                <li><Link href={Href} onClick={() => editUsers(selectedUser)}>{Edit}</Link></li>
                <li><Link href={Href} onClick={() => deleteUser(selectedUser.id)}>{Delete}</Link></li>
                <li><Link href={Href} onClick={()=>dispatch(setHistory())}>{History}</Link></li>
                <li><Link href={Href} onClick={() => printModalToggle()}>{Print}</Link></li>
              </ul>
            </div>
          </div>
          <div className="email-general">
            <h3 className='mb-3'>{General}</h3>
            <ul>
              <li>{Name}<span className="font-primary first_name_0">{selectedUser.name}</span></li>
              <li>{MobileNo} <span className="font-primary mobile_num_0">{selectedUser.mobile}</span></li>
              <li>{Emailaddress}<span className="font-primary email_add_0">{`${selectedUser.name}@gmail.com`} </span></li>
            </ul>
          </div>
        </div>
        :
        <SearchNotFoundClass />
      }
      {selectedUser && <PrintModal toggleCallback={toggleCallback} printModal={printmodal} selectedUser={selectedUser} />}
    </>
  )
}

export default ContactDetailsClass