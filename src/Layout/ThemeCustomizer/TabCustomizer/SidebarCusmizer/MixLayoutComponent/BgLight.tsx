import { MixLayoutComponentProp } from "@/Types/ThemeCustomizerTypes";
import CommonUL from "../CommonUL/CommonUL";

const BgLight:React.FC<MixLayoutComponentProp> = ({ handleCustomizerMix_Background, mixLayout }) => {
  return (
    <li className={`color-layout border-0 ${mixLayout === "light" ? "active" : ""}`} data-attr='light' onClick={() => handleCustomizerMix_Background("light")}>
      <div className='header bg-light'>
        <CommonUL />
      </div>
      <div className='body'>
        <ul className='flex-row'>
          <li className='bg-light sidebar'></li>
          <li className='bg-light body'> </li>
        </ul>
      </div>
    </li>
  );
};

export default BgLight;
