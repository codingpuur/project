import { Company, Country, CreditVolume, Email, FirstName, Id, Lastname, Role } from '../../../../../utils/Constant'

const InversTableClassTableHead = () => {
  return (
    <thead>
      <tr>
        <th scope="col">{Id}</th>
        <th scope="col">{FirstName}</th>
        <th scope="col">{Lastname}</th>
        <th scope="col">{Company}</th>
        <th scope="col">{CreditVolume}</th>
        <th scope="col">{Email}</th>
        <th scope="col">{Role}</th>
        <th scope="col">{Country}</th>
      </tr>
    </thead>
  )
}

export default InversTableClassTableHead