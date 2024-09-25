import { ChangeEvent, useState } from 'react';
import ShowError from '../../../NumberingWizard/CommonError/ShowError';
import { Button } from 'reactstrap';
import { SavedAddress, ShippingInformation, ShippingInformationText, ShippingMethod } from '@/utils/Constant';
import NewAddressModal from './NewAddressModal';
import HomeAndOfficeAddress from './HomeAndOfficeAddress';
import { CommonPropsTypes } from '@/Types/FormLayoutTypes';
import ShippingMethods from './ShippingMethods';

const ShippingFormContent:React.FC<CommonPropsTypes> = ({ callbackActive }) => {
  const [radioBoxValues, setRadioBoxValues] = useState({address: "",shippingMethod: "",});
  const { address, shippingMethod } = radioBoxValues;
  const getUserData = (event: ChangeEvent<HTMLInputElement>) => {
    let name = event.target.name;
    let value = event.target.value;
    setRadioBoxValues({ ...radioBoxValues, [name]: value });
  };

  const handleNextButton = () => {
    if (address !== "" && shippingMethod !== "") {
      callbackActive(3);
    } else {
      ShowError();
    }
  };
  const [showModal, setShowModal] = useState(false);
  const toggle = () => setShowModal(!showModal);
  return (
    <>
      <h3>{ShippingInformation}</h3>
      <p className="f-light">{ShippingInformationText}</p>
      <div className="shipping-title shipping-wizard">
        <h3 className="mb-2">{SavedAddress}</h3>
        <Button onClick={toggle} color="primary">
          <i className="fa fa-plus-square f-20" />
        </Button>
        <NewAddressModal showModal={showModal} toggle={toggle} />
      </div>
      <HomeAndOfficeAddress radioBoxValues={radioBoxValues} getUserData={getUserData}/>
      <h3 className="mt-4 mb-2">{ShippingMethod}</h3>
      <ShippingMethods radioBoxValues={radioBoxValues} getUserData={getUserData} handleNextButton={handleNextButton}/>
    </>
  )
}

export default ShippingFormContent