import { PREVIEWSETTINGS } from "@/utils/Constant";

const TabHeader = ({ callbackNav }: { callbackNav: (test: string, open: boolean) => void }) => {
  return (
    <div className='customizer-header'>
      <i className='icon-close' onClick={() => callbackNav("", false)}></i>
      <h5>{PREVIEWSETTINGS}</h5>
      <p className='mb-0'>
        {"Try It Real Time"} <i className='fa fa-thumbs-o-up txt-primary'></i>
      </p>
    </div>
  );
};

export default TabHeader;
