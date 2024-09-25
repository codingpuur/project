import { CardBody } from "reactstrap";
import TouchSpins from "../TouchSpins";
import { TouchSpinPropsType } from "@/Types/FormWingetsType";

const CommonTouchSpin: React.FC<TouchSpinPropsType> = ({ touchSpinClassNames, cardBodyClassName, arrowIcon }) => {
  return (
    <CardBody className={`common-flex ${cardBodyClassName ? cardBodyClassName : ""}`}>
      {touchSpinClassNames.map((data, index) => (
        <TouchSpins key={index} item={data} arrowIcon={arrowIcon} />
      ))}
    </CardBody>
  );
};

export default CommonTouchSpin;
