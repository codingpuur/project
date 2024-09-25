import { useAppSelector } from '@/Redux/Hooks';
import { Label } from 'reactstrap'

const InvoiceData = () => {
    const { cart } = useAppSelector((state) => state.cartData);
  return (
    <>
        {cart.map((data) => (
            <tr>
                <td>
                    <Label>{data.name}</Label>
                    <p className="m-0">{data.note}</p>
                </td>
                <td>
                    <p className="itemtext">{Math.random().toFixed()}</p>
                </td>
                <td>
                    <p className="itemtext">${data.price}</p>
                </td>
                <td>
                    <p className="itemtext">${data.price * data.total}</p>
                </td>
            </tr>
        ))}
    </>
  )
}

export default InvoiceData