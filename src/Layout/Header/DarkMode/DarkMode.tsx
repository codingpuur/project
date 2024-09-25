import SVG from "@/utils/CommonSvgIcon/SVG";
import { setMixBackgroundLayout } from "@/Redux/Reducer/ThemeCustomizerSlice";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";

const DarkMode = () => {
  const{mix_background_layout} = useAppSelector((state) => state.themeCustomizer)
  const dispatch = useAppDispatch();
  const handleDarkMode = (name:string) => {
    if (name === "light") {
      document.body.classList.remove("light");
      document.body.classList.add("dark-only");
      dispatch(setMixBackgroundLayout("dark-only"));
    } else if(name === "dark-only"){
      document.body.classList.remove("dark-only");
      document.body.classList.add("light");
      dispatch(setMixBackgroundLayout("light"));
      }
  }
  return (
    <li>
      <div className={`mode ${mix_background_layout === "dark-only" ? "active" : ""}`}>
        <SVG iconId='moon' onClick={()=>handleDarkMode(mix_background_layout)}/>
      </div>
    </li>
  );
};

export default DarkMode;
