import { CommonRibbonsType } from "@/Types/BonusuiTypes";
import { Col } from "reactstrap";

const CommonRibbons = ({ ribbonText, subText, classMain, ribbonClass }: CommonRibbonsType) => {
  return (
    <Col xl={4} sm={6}>
      <div className={classMain}>
        <div className={ribbonClass} dangerouslySetInnerHTML={{__html:ribbonText}} />
        <div dangerouslySetInnerHTML={{__html:subText}} />
      </div>
    </Col>
  );
};

export default CommonRibbons;
