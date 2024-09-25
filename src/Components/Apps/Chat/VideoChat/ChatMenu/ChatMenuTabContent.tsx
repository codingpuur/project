import { TabContent, TabPane } from 'reactstrap'
import PeopleList from './PeopleList';
import PeopleStatus from './PeopleStatus';
import UserProfile from './UserProfile';
import { ActivTabProps } from '@/Types/Apps/ChatTypes';

const ChatMenuTabContent:React.FC<ActivTabProps> = ({ activeTab }) => {
  return (
    <TabContent activeTab={activeTab}>
      <TabPane tabId={1}>
        <PeopleList />
      </TabPane>
      <TabPane tabId={2}>
        <PeopleStatus />
      </TabPane>
      <TabPane tabId={3}>
        <UserProfile />
      </TabPane>
    </TabContent>
  )
}

export default ChatMenuTabContent