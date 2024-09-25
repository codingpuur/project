import { Age, FirstName, JoinDate, Lastname, Office, Position, Salary } from "../../../../../utils/Constant"

const InverseTableClassTableHead = () => {
  return (
    <thead>
      <tr>
        <th scope="col">{"#"}</th>
        <th scope="col">{FirstName}</th>
        <th scope="col">{Lastname}</th>
        <th scope="col">{Office}</th>
        <th scope="col">{Position}</th>
        <th scope="col">{Salary}</th>
        <th scope="col">{JoinDate}</th>
        <th scope="col">{Age}</th>
      </tr>
    </thead>
  )
}

export default InverseTableClassTableHead