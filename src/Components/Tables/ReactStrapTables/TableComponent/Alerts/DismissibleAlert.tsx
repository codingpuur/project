import { Alert } from "reactstrap";
import { useState } from "react";
import { alertDismissibleData } from "@/Data/Tables/ReactStrapTables/TableComponentData";

const DismissibleAlert = () => {
  const [visible, setVisible] = useState(true);
  const onDismiss = () => setVisible(false);

  return (
    <>
      {alertDismissibleData.map((data, index) => (
        <tr key={index}>
          <td>{data.title}</td>
          <td className="w-50">
            <Alert color={data.color} toggle={onDismiss} isOpen={visible}>
              {data.icon && <i className="icofont icofont-heart-alt"></i>}
              <p dangerouslySetInnerHTML={{ __html: data.tableColData }}></p>
            </Alert>
          </td>
          <td>
            <p dangerouslySetInnerHTML={{ __html: data.details }}></p>
          </td>
        </tr>
      ))}
    </>
  );
};

export default DismissibleAlert;
