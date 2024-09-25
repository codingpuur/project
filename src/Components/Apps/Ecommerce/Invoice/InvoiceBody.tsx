import { Table } from "reactstrap";
import { getallCardTotal } from "@/Service/Ecommerce.service";
import { Total } from "@/utils/Constant";
import InvoiceImage from "./InvoiceImage";
import InvoiceData from "./InvoiceData";
import { useAppSelector } from "@/Redux/Hooks";

const InvoiceBody = () => {
  const { cart } = useAppSelector((state) => state.cartData);
  return (
    <div>
      <div className="table-responsive theme-scrollbar invoice-table" id="table">
        <Table bordered striped>
          <tbody>
            <tr>
              <td className="item">
                <h3 className="p-2 mb-0">{"Item Description"}</h3>
              </td>
              <td className="Hours">
                <h3 className="p-2 mb-0">{"Hours"}</h3>
              </td>
              <td className="Rate">
                <h3 className="p-2 mb-0">{"Rate"}</h3>
              </td>
              <td className="subtotal">
                <h3 className="p-2 mb-0">{"Sub-total"}</h3>
              </td>
            </tr>
            <InvoiceData />
            <tr>
              <td />
              <td />
              <td className="Rate">
                <h3 className="mb-0 p-2">{Total}</h3>
              </td>
              <td className="payment">
                <h3 className="mb-0 p-2">${getallCardTotal(cart)}</h3>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
      <InvoiceImage />
    </div>
  );
};

export default InvoiceBody;
