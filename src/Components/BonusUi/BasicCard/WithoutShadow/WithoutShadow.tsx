import { Card, CardBody, Col } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import { ShadowCardText, WithoutshadowCard } from "@/utils/Constant";
import Image from "next/image";
import { ImagePath } from "@/Constant";
import { WithoutShadowData } from "@/Data/BonusUi/Basiccard/BasiccardData";

const WithoutShadow = () => {
  return (
    <Col sm={12} xl={6}>
      <Card className='shadow-none border'>
        <CommonHeader title={WithoutshadowCard} subTitle={WithoutShadowData} headClass='pb-0' />
        <CardBody>
          <div className='flex-space flex-wrap align-items-center'>
            <Image className='tab-img' src={`${ImagePath}/avtar/3.jpg`} alt='profile' width={100} height={100} />
            <p>{ShadowCardText}</p>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default WithoutShadow;
