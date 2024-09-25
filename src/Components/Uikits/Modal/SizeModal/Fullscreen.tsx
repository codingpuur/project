import { Fragment, useState } from "react";
import { Button } from "reactstrap";
import CommonModal from "@/CommonElements/Ui-kits/CommonModal";
import FeatherIcons from "@/utils/CommonSvgIcon/FeatherIcons";
import { FullScreenModal } from "@/utils/Constant";
import { fullscreenModalData } from "@/Data/Uikits/Model/ModalData";

const Fullscreen = () => {
  const [modal, setModal] = useState(false);
  const toggle = () => {
    setModal(!modal);
  };
  const ModalData = {
    isOpen: modal,
    header: true,
    class: "modal-fullscreen",
    toggler: toggle,
    title: "Extra Large modal",
    size: "fullscreen",
  };
  return (
    <>
      <Button color='secondary' onClick={toggle}>
        {FullScreenModal}
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

export default Fullscreen;
