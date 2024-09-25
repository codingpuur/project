import { Company, Country, Designation, FirstName, Id, Language, Lastname, Username } from "../../../../../utils/Constant"

const BasicTableClassTableHead = () => {
  return (
    <thead>
      <tr className="border-bottom-primary">
        <th scope="col">{Id}</th>
        <th scope="col">{FirstName}</th>
        <th scope="col">{Lastname}</th>
        <th scope="col">{Username}</th>
        <th scope="col">{Designation}</th>
        <th scope="col">{Company}</th>
        <th scope="col">{Language}</th>
        <th scope="col">{Country}</th>
      </tr>
    </thead>
  )
}

export default BasicTableClassTableHead