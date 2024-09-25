import { Fragment, useState } from "react";
import { Button } from "reactstrap";
import { Fullscreenbelow_xl, UXDesigner, WebDesign, WedDesigner } from "@/utils/Constant";
import CommonModal from "@/CommonElements/Ui-kits/CommonModal";
import FeatherIcons from "@/utils/CommonSvgIcon/FeatherIcons";
import { belowsmData } from "@/Data/Uikits/Model/ModalData";

const BelowXl = () => {
  const [modal, setModal] = useState(false);
  const toggle = () => {
    setModal(!modal);
  };
  const ModalData = {
    isOpen: modal,
    header: true,
    footer: true,
    toggler: toggle,
    title: "Full Screen Below xl",
  };
  return (
    <>
      <Button color='outline-primary-2x' className='btn-outline-primary-2x' onClick={toggle}>
        {Fullscreenbelow_xl}
      </Button>
      <CommonModal modalData={ModalData}>
        <div className='large-modal-header'>
          <FeatherIcons iconName='ChevronsRight' />
          <h6>{WebDesign}</h6>
        </div>
        <p className='modal-padding-space'>{"We build specialised websites for companies, list them on digital directories, and set up a sales funnel to boost ROI."}</p>
        <h6>{WedDesigner}</h6>
        <>
          {belowsmData &&
            belowsmData.map((item, index) => (
              <Fragment key={index}>
                <div className={`d-flex ${item.class}`}>
                  <div className='flex-shrink-0'>
                    <FeatherIcons iconName='ArrowRightCircle' className='svg-modal' />
                  </div>
                  <div className='flex-grow-1 ms-2'>
                    <p className={index === 1 ? "pb-4 mb-0" : "mb-0"}>{item.text}</p>
                  </div>
                </div>
                {index === 1 && <h6>{UXDesigner}</h6>}
              </Fragment>
            ))}
        </>
      </CommonModal>
    </>
  );
};

export default BelowXl;
