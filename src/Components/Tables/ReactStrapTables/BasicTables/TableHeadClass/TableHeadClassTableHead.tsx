import { FirstName, Id, Lastname, Username } from '../../../../../utils/Constant'

const TableHeadClassTableHead = () => {
  return (
    <thead className="table-dark">
      <tr>
        <th scope="col">{Id}</th>
        <th scope="col">{FirstName}</th>
        <th scope="col">{Lastname}</th>
        <th scope="col">{Username}</th>
      </tr>
    </thead>
  )
}

export default TableHeadClassTableHead