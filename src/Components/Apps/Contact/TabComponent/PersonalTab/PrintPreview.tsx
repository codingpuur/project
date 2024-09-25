import { PrintPreviewPropsType } from '@/Types/Apps/ContactTypes';
import { Emailaddress, General } from '@/utils/Constant';
import Image from 'next/image';

const PrintPreview:React.FC<PrintPreviewPropsType> = ({selectedUser}) => {
  return (
    <div className="profile-mail pt-0" id="DivIdToPrint">
        <div className="d-flex">
            <Image className= 'img-100 img-fluid m-r-20 rounded-circle' src= {`${selectedUser.avatar}`} alt= '' height={100} width={100}/>
            <div className="flex-grow-1 mt-0">
                <h3>
                  <span id="printname">{selectedUser.name}</span>
                  <span id="printlast">{selectedUser.surename}</span>
                </h3>
                <p>{selectedUser.name}{'@gmail.com'}</p>
            </div >
            </div>
            <div className="email-general">
            <h3>{General}</h3>
            <p>{Emailaddress}:<span className="font-primary" id="mailadd">{selectedUser.surename}{'@gmail.com'}</span></p>
        </div>
    </div>
  )
}

export default PrintPreview