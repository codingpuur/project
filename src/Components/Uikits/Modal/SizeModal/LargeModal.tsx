import { Fragment, useState } from "react";
import { Button } from "reactstrap";
import CommonModal from "@/CommonElements/Ui-kits/CommonModal";
import FeatherIcons from "@/utils/CommonSvgIcon/FeatherIcons";
import { Large_Modal, Startyourgoals } from "@/utils/Constant";
import { largeModalData } from "@/Data/Uikits/Model/ModalData";

const LargeModal = () => {
  const [modal, setModal] = useState(false);
  const toggle = () => {
    setModal(!modal);
  };
  const ModalData = {
    isOpen: modal,
    header: true,
    class: "modal-lg",
    toggler: toggle,
    title: "Large modal",
    size: "fullscreen",
  };
  return (
    <>
      <Button color='success' onClick={toggle}>
        {Large_Modal}
      </Button>
      <CommonModal modalData={ModalData}>
        <div className='large-modal-header'>
          <FeatherIcons iconName='ChevronsRight' />
          <h6>{Startyourgoals}</h6>
        </div>
        <>
          {largeModalData &&
            largeModalData.map((item, index) => (
              <Fragment key={index}>
                {index <= 2 && <p className='modal-padding-space mb-0'>{item.text}</p>}
                {index > 2 && (
                  <div className='large-modal-body'>
                    <FeatherIcons iconName='CornerUpRight' />
                    <p className='ps-1 mb-0'>{item.text}</p>
                  </div>
                )}
              </Fragment>
            ))}
        </>
      </CommonModal>
    </>
  );
};

export default LargeModal;
