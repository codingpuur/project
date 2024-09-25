import { Age, ContactNo, Email, EmployeeName, Experience, Id, Sex } from '../../../../../utils/Constant'

const CaptionClassTableHead = () => {
  return (
    <>
      <thead>
        <tr>
          <th scope="col">{Id}</th>
          <th scope="col">{EmployeeName}</th>
          <th scope="col">{Email}</th>
          <th scope="col">{Experience}</th>
          <th scope="col">{Sex}</th>
          <th scope="col">{ContactNo}</th>
          <th scope="col">{Age}</th>
        </tr>
      </thead>
      <caption>{"List of users"}</caption>
    </>
  )
}

export default CaptionClassTableHead