import { ImagePath } from "@/Constant"
import { currentCartTableBodyData } from "@/Data/Form/FormLayout/FormWizardData"
import Image from "next/image"

const CurrentCartTableBody = () => {
  return (
    <tbody>
      {currentCartTableBodyData.map((data, index) => (
        <tr key={index}>
          <td>
            <Image height={50} width={46.5} src={`${ImagePath}/${data.imagePath}`} alt="t-shirt"/>
          </td>
          <td>
            <div>
              <h3>{data.productName}</h3>
              <span>{data.productSum}</span>
            </div>
          </td>
          <td>
            <p>{data.price}</p>
          </td>
        </tr>
      ))}
    </tbody>
  )
}

export default CurrentCartTableBody