import { TabContent, TabPane } from "reactstrap";
import BillingForm from "./BillingForm/BillingForm";
import ShippingFormContent from "./ShippingFormContent/ShippingFormContent";
import PaymentForm from "./PaymentForm/PaymentForm";
import SubmitShippingForm from "./SubmitShippingForm/SubmitShippingForm";
import { ShippingFormTabContentPropsType } from "@/Types/FormLayoutTypes";

const ShippingFormTabContent: React.FC<ShippingFormTabContentPropsType> = ({ activeTab, callbackActive }) => {
  return (
    <TabContent className='dark-field shipping-content' activeTab={activeTab}>
      <TabPane tabId={1} className='shipping-wizard'>
        <BillingForm callbackActive={callbackActive} />
      </TabPane>
      <TabPane tabId={2} className='shipping-wizard'>
        <ShippingFormContent callbackActive={callbackActive} />
      </TabPane>
      <TabPane tabId={3} className='shipping-wizard'>
        <PaymentForm callbackActive={callbackActive} />
      </TabPane>
      <TabPane tabId={4} className='shipping-wizard finish-wizard1'>
        <SubmitShippingForm />
      </TabPane>
    </TabContent>
  );
};

export default ShippingFormTabContent;
