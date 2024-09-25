import { Fragment, useState } from "react";
import { Button } from "reactstrap";
import { ExtraLargeModal } from "@/utils/Constant";
import CommonModal from "@/CommonElements/Ui-kits/CommonModal";
import FeatherIcons from "@/utils/CommonSvgIcon/FeatherIcons";
import { fullscreenModalData } from "@/Data/Uikits/Model/ModalData";

const ExtraLarge = () => {
  const [modal, setModal] = useState(false);
  const toggle = () => {
    setModal(!modal);
  };
  const ModalData = {
    isOpen: modal,
    header: true,
    class: "modal-xl",
    toggler: toggle,
    title: "Extra Large modal",
    size: "fullscreen",
  };
  return (
    <>
      <Button color='info' onClick={toggle}>
        {ExtraLargeModal}
      </Button>
      <CommonModal modalData={ModalData}>
        <>
          {fullscreenModalData &&
            fullscreenModalData.map((item, index) => (
              <Fragment key={index}>
                <div className='large-modal-header'>
                  <FeatherIcons iconName='ChevronRight' />
                  <h4>{item.title}</h4>
                </div>
                <p className='modal-padding-space'>{item.text}</p>
              </Fragment>
            ))}
        </>
      </CommonModal>
    </>
  );
};

export default ExtraLarge;
