import { Button, Container, Input, Label, Row } from "reactstrap";
import { Class, CopyText, Markup } from "@/utils/Constant";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { toast } from "react-toastify";
import { IconBottomProps } from "@/Types/Iconsypes";


const IconBottom:React.FC<IconBottomProps> = ({iTag, icon,data,}) => {
    const featherIcons = require("feather-icons");
    const closeIcon = document.getElementsByClassName("icon-hover-bottom") as HTMLCollectionOf<HTMLElement>;
    const closeIconContainer = () => {
      closeIcon[0].style.display = "none";
    };
    if (iTag !== "" && icon !== "") {
      closeIcon[0].style.display = "block";
    }
  return (
    <div className="icon-hover-bottom p-fixed fa-fa-icon-show-div">
      <Container fluid>
        <Row>
          <div className="icon-popup">
            <div className="close-icon" onClick={() => closeIconContainer()}>
              <i className="icofont icofont-close"></i>
            </div>
            <div className="icon-first">
              {data ? <div dangerouslySetInnerHTML={{__html:featherIcons.icons[icon].toSvg(icon)}}/>  : <i id='icon_main' className={icon}></i>}
            </div>
            <div className="icon-class">
              <Label className="icon-title">{Class}</Label>
              <span id="fclass1">{data ? icon : icon}</span>
            </div>
            <div className="icon-last icon-last">
              <Label className="icon-title fw-bolder">{Markup}</Label>
              <div className="form-inline">
                <div className="form-group m-0">
                  <Input className="inp-val m-r-10 fw-bold" id="input_copy" type="text" defaultValue={iTag} />
                  <CopyToClipboard text={iTag}>
                    <Button color="primary" className="notification"
                     onClick={() =>
                      toast.success('Code Copied to clipboard !!', {
                        position: "bottom-right",
                        autoClose: 5000,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        })
                      }
                    >
                      {CopyText}
                    </Button>
                  </CopyToClipboard>
                </div>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default IconBottom;
