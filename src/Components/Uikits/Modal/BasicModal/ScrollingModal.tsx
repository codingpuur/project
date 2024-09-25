import { Fragment, useState } from "react";
import { Button } from "reactstrap";
import { Scrollingcontent, UXDesigner, WedDesigner } from "@/utils/Constant";
import FeatherIcons from "@/utils/CommonSvgIcon/FeatherIcons";
import CommonModal from "@/CommonElements/Ui-kits/CommonModal";
import { scrollingModalData } from "@/Data/Uikits/Model/ModalData";

const ScrollingModal = () => {
  const [modal, setModal] = useState(false);
  const toggle = () => {
    setModal(!modal);
  };
  const ModalData = {
    isOpen: modal,
    header: true,
    footer: true,
    toggler: toggle,
    title: "Scrolling Modal",
  };
  return (
    <>
      <Button color="success" onClick={toggle}>
        {Scrollingcontent}
      </Button>
      <CommonModal modalData={ModalData}>
        <>
          <h6>{WedDesigner}</h6>
          {scrollingModalData &&
            scrollingModalData.map((item, index) => (
              <Fragment key={index}>
                {index === 3 && <h6>{UXDesigner}</h6>}
                <div className={`d-flex ${item.class}`}>
                  <div className="flex-shrink-0">
                    <FeatherIcons
                      iconName="ArrowRightCircle"
                      className="svg-modal"
                    />
                  </div>
                  <div className="flex-grow-1 ms-2">
                    {index === 3 ? (
                      <p className="pb-4">{item.text}</p>
                    ) : (
                      <p>{item.text}</p>
                    )}
                  </div>
                </div>
              </Fragment>
            ))}
        </>
      </CommonModal>
    </>
  );
};

export default ScrollingModal;
