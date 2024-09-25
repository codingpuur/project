import { Col, Input, Label } from 'reactstrap'
import { Fragment } from 'react'
import { YourFavoriteSocialMedia } from '@/utils/Constant'
import { favoriteSocialMediaItems } from '@/Data/Form/FormControl/FormControlData'

const FavoriteSocialMedia = () => {
  return (
    <Col sm={6}>
      <div className="card-wrapper border rounded-3 checkbox-checked">
        <h6 className="sub-title">{YourFavoriteSocialMedia}</h6>
        {favoriteSocialMediaItems.map((data, index) => (
          <Fragment key={index}>
            <Label className="d-block" htmlFor={`chk-ani-${index}`} />
            <Input className="checkbox_animated" id={`chk-ani-${index}`} type="checkbox" />{data}
          </Fragment>
        ))}
      </div>
    </Col>
  )
}

export default FavoriteSocialMedia