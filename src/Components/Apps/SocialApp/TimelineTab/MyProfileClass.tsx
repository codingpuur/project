import { useState } from 'react'
import { Card } from 'reactstrap';
import MyProfileClassCollapse from './MyProfileClassCollapse';
import { MyProfile } from '@/utils/Constant';
import HeaderWithIcon from '@/CommonElements/HeaderWithIcon';

const MyProfileClass = () => {
    const [isOpen, setIsOpen] = useState(true);
  return (
    <Card>
        <HeaderWithIcon Heading={MyProfile} isOpen={isOpen} setIsOpen={setIsOpen}/>
        <MyProfileClassCollapse isFilter={isOpen}  />
    </Card>
  )
}

export default MyProfileClass