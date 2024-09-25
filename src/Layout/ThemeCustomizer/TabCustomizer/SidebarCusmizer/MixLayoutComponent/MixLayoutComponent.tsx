import { Mix_Layout } from "@/utils/Constant";
import BgLight from "./BgLight";
import BgDark from "./BgDark";
import ConfigDB from "@/Config/ThemeConfig";
import { useAppDispatch } from "@/Redux/Hooks";
import { setMixBackgroundLayout } from "@/Redux/Reducer/ThemeCustomizerSlice";

const MixLayoutComponent = () => {
  const dispatch = useAppDispatch();
  const mixLayout = ConfigDB.data.color.mix_background_layout;

  const addMixBackgroundLayout = (mix_background_layout: string) => {
    ConfigDB.data.color.mix_background_layout = mix_background_layout;
    dispatch(setMixBackgroundLayout(mix_background_layout));
  };

  const handleCustomizerMix_Background = (value: string) => {
    addMixBackgroundLayout(value);
    if (value === "light") {
      document.body.classList.add("light");
      document.body.classList.remove("dark-only");
    } else if (value === "dark-only") {
      document.body.classList.remove("light");
      document.body.classList.add("dark-only");
    }
  };
  return (
    <>
      <h6>{Mix_Layout}</h6>
      <ul className="layout-grid customizer-mix flex-row">
        <BgLight mixLayout={mixLayout} handleCustomizerMix_Background={handleCustomizerMix_Background}/>
        <BgDark mixLayout={mixLayout} handleCustomizerMix_Background={handleCustomizerMix_Background}/>
      </ul>
    </>
  );
};

export default MixLayoutComponent;
