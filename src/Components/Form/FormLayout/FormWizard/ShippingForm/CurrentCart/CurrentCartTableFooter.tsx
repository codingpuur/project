import { currentCartTableFooterData } from "@/Data/Form/FormLayout/FormWizardData";

const CurrentCartTableFooter = () => {
  return (
    <tfoot>
      {currentCartTableFooterData.map((data, index) => (
        <tr key={index}>
          <td>{data.footerTittle}</td>
          <td colSpan={2}>${data.price} </td>
        </tr>
      ))}
    </tfoot>
  );
};

export default CurrentCartTableFooter;
