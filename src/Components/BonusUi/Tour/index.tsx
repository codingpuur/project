import { useTour } from "@reactour/tour";
import { useEffect } from "react";
import Profile from "./Profile/Profile";
import WilliamProfile from "./WilliamProfile/WilliamProfile";
import Profile2 from "./Profile2/Profile2";
import DetailImg from "./DetailImg/DetailImg";
import ProfileDetail from "./ProfileDetail/ProfileDetail";

const TourPage = () => {
  const { setIsOpen, isOpen } = useTour();
  useEffect(() => {
    var timer = setTimeout(() => {
      setIsOpen(true);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <>
      <Profile />
      <WilliamProfile />
      <Profile2 />
      <ProfileDetail />
      <DetailImg />
    </>
  );
};

export default TourPage;
