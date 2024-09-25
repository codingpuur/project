import { Toast, ToastBody, ToastHeader } from "reactstrap";
import { CionTheme } from "@/utils/Constant";
import Image from "next/image";
import { ImagePath } from "@/Constant";

const ToastPlacementsBody:React.FC<{ data: string }> = ({data}) => {
  return (
    <div className="bg-light position-relative bd-example-toasts" >
      <div className={`toast-container p-3 position-absolute ${data}`} id="toastPlacement">
        <Toast>
          <div className="toast-img toast-header">
            <Image className="rounded me-2" src={`${ImagePath}/dashboard-2/user/profile.png`} alt="profile" height={100} width={100}/>
            <strong className="me-auto">{CionTheme}</strong>
            <small className="text-nowrap">25 min ago</small>
          </div>
          <ToastBody className="toast-dark txt-dark">
            <p className="toast-content"><em className="txt-danger">Attackers</em> on malicious activity may trick you into doing something dangrous like installing software or revealing your personal informations.</p>
          </ToastBody>
        </Toast>
      </div>
    </div>
  );
};

export default ToastPlacementsBody;
