import { Input, ListGroup, ListGroupItem } from "reactstrap";
import { Sales } from "@/utils/Constant";
import { selectRequirementsData } from "@/Data/Form/FormControl/FormControlData";

const VariationBox = () => {
  return (
    <div className='variation-box'>
      {selectRequirementsData.map((data, index) => (
        <div className='selection-box' key={index}>
          <Input type='checkbox' defaultChecked={data.defaultChecked ? true : false} />
          <div className='custom--mega-checkbox'>
            <ul className='d-flex flex-column list'>
              <li>{data.themeName}</li>
              <li className='txt-primary'>
                {data.sale} {Sales}
              </li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VariationBox;
