import { TabContent, TabPane } from "reactstrap";
import PersonalInfoForm from "./PersonalInfoForm";
import BankInfoForm from "./BankInfoForm";
import InquiresForm from "./InquiresForm";
import SuccessfullyFormSubmitted from "./SuccessfullyFormSubmitted";
import { BusinessFormCommonProps } from "@/Types/FormLayoutTypes";

const CustomFormTabContent: React.FC<BusinessFormCommonProps> = ({ activeTab, callbackActive }) => {
  return (
    <TabContent className='dark-field' activeTab={activeTab}>
      <TabPane tabId={1}>
        <PersonalInfoForm callbackActive={callbackActive} />
      </TabPane>
      <TabPane tabId={2}>
        <BankInfoForm callbackActive={callbackActive} />
      </TabPane>
      <TabPane tabId={3}>
        <InquiresForm callbackActive={callbackActive} />
      </TabPane>
      <TabPane tabId={4}>
        <SuccessfullyFormSubmitted />
      </TabPane>
    </TabContent>
  );
};

export default CustomFormTabContent;
