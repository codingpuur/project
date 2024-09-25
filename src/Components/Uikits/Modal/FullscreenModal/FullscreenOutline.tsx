import { Fragment, useState } from "react";
import { Button } from "reactstrap";
import { Fullscreenmodal, UXDesigner, WebDesign, WedDesigner } from "@/utils/Constant";
import CommonModal from "@/CommonElements/Ui-kits/CommonModal";
import FeatherIcons from "@/utils/CommonSvgIcon/FeatherIcons";
import { scrollingModalData } from "@/Data/Uikits/Model/ModalData";

const FullscreenOutline = () => {
  const [modal, setModal] = useState(false);
  const toggle = () => {
    setModal(!modal);
  };
  const ModalData = {
    isOpen: modal,
    header: true,
    footer: true,
    class: "modal-fullscreen",
    toggler: toggle,
    title: "Full Screen Modal",
    button: "Save",
  };
  return (
    <>
      <Button color='outline-secondary-2x' onClick={toggle}>
        {Fullscreenmodal}
      </Button>
      <CommonModal modalData={ModalData}>
        <div className='large-modal-header'>
          <FeatherIcons iconName='ChevronsRight' />
          <h6>{WebDesign} </h6>
        </div>
        <p className='modal-padding-space'>{"We build specialised websites for companies, list them on digital directories, and set up a sales funnel to boost ROI."}</p>
        <>
          <h6>{WedDesigner}</h6>
          {scrollingModalData &&
            scrollingModalData.map((item, index) => (
              <Fragment key={index}>
                {index === 4 && <h6>{UXDesigner}</h6>}
                <div className={`d-flex ${item.class}`}>
                  <div className='flex-shrink-0'>
                    <FeatherIcons iconName='ArrowRightCircle' className='svg-modal' />
                  </div>
                  <div className='flex-grow-1 ms-2'>{index === 3 ? <p className='pb-4 mb-0'>{item.text}</p> : <p className='mb-0'>{item.text}</p>}</div>
                </div>
              </Fragment>
            ))}
        </>
      </CommonModal>
    </>
  );
};

export default FullscreenOutline;
