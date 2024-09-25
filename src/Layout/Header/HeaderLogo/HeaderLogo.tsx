import Image from "next/image";
import Link from "next/link";
import { ImagePath } from "@/Constant";
import { setToggleSidebar } from "@/Redux/Reducer/LayoutSlice";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import SVG from "@/utils/CommonSvgIcon/SVG";

const HeaderLogo = () => {
  const dispatch = useAppDispatch();
  const { toggleSidebar } = useAppSelector((state) => state.layout);

  return (
    <>
      <div className='logo-wrapper'>
        <Link href={`/dashboards/shoppingplace`}>
          <Image className='img-fluid' src={`${ImagePath}/logo/logo.png`} alt='' height={38} width={42} />
        </Link>
      </div>
      <SVG
        iconId={"Grid"}
        className={"stroke-icon toggle-sidebar"}
        onClick={() => {
          dispatch(setToggleSidebar(!toggleSidebar));
        }}
      />
    </>
  );
};

export default HeaderLogo;
