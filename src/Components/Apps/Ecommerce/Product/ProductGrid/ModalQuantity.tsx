import { ChangeEvent } from 'react'
import { Button, Input, InputGroup } from 'reactstrap';
import { Quantity } from '@/utils/Constant';
import { ModalQuantityProp } from '@/TypeCommon/Apps/Ecommerce/ProductType';

const ModalQuantity:React.FC<ModalQuantityProp> = ({ quantity, setQuantity }) => {
  const minusQty = () => quantity > 1 && setQuantity(quantity - 1);
  const plusQty = () => quantity >= 1 && setQuantity(quantity + 1);
  const changeQty = (e: ChangeEvent<HTMLInputElement>) => setQuantity(parseInt(e.target.value));

  return (
    <>
      <h3 className="f-w-600 mb-2">{Quantity}</h3>
      <fieldset className="border-0">
        <InputGroup className="bootstrap-touchspin w-50">
          <Button color='primary' className="bootstrap-touchspin-down" onClick={minusQty}>
            <i className="fa fa-minus text-white"></i>
          </Button>
          <Input className="touchspin text-center" type="text" name="quantity" value={quantity} onChange={(e) => changeQty(e)} />
          <Button color='primary' className="bootstrap-touchspin-up" onClick={plusQty}>
            <i className="fa fa-plus text-white"></i>
          </Button>
        </InputGroup>
        <br />
      </fieldset>
    </>
  )
}

export default ModalQuantity