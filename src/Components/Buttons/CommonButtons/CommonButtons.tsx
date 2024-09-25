import { Button, Card, CardBody } from 'reactstrap';
import CommonCardHeading from './CommonCardHeading';
import { Fragment } from 'react';
import CommonButtonsToolTip from './CommonButtonsToolTip';
import { defaultType } from '@/Types/ButtonsType';

const CommonButtons = ({commonButtonsData, title, subTitle,className,raised}:defaultType) => {
  return (
    <Card>
      <CommonCardHeading smallHeading={title} span={subTitle} />
      <CardBody>
        <div className='btn-showcase' >
            {commonButtonsData.map((data, index) => (
                <Fragment key={index}>
                    <Button className={`${className?className:""} ${raised && `btn-air-${data.color}`}`} outline={data.outline} active={data.active} disabled={data.disabled} size={data.size?data.size:"" }  id={data.id} color={data.color}>
                        {data.tittle}
                    </Button>
                    <CommonButtonsToolTip toolTipText={data.toolTipText ?data.toolTipText : ""} id={data.id ? data.id : ""} />            
                </Fragment>
            ))}
        </div>
      </CardBody>
    </Card>
  );
}

export default CommonButtons