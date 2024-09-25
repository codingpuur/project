import { Card, Col } from "reactstrap";
import CommonProfileHead from "@/CommonElements/BonusUi/CommonProfileHead";
import { Dec09, Min2read } from "@/utils/Constant";
import ProfileLike from "../WilliamProfile/ProfileLike";

const ProfileDetail = () => {
  return (
    <Col sm={12}>
      <Card>
        <div className="profile-img-style">
          <CommonProfileHead month={Dec09} time={Min2read} activeTime="9 Month ago" />
          <hr />
          <p className="block-ellipsis">{"Nature has a role in our lives. We are a part of everything since we sprang from a seed and the ground, but we are quickly losing the perception that we are animals much like the rest.Is it possible to feel something when you gaze at, appreciate, and hear  tree ? Can you pay attention to the tiny weed, the creeper climbing the wall, the light on  leaves, and the numerous shadows ? All of this must be understood, and one must have a feeling of connectedness with the natural world around them.Despite living in a town, there are still a few trees here and there.The next garden's bloom could not be well-kept."}</p>
          <ProfileLike />
        </div>
      </Card>
    </Col>
  );
};

export default ProfileDetail;
