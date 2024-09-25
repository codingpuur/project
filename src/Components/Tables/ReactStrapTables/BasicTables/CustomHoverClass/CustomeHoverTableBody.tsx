import { customTableColorData } from "@/Data/Tables/ReactStrapTables/ReactStrapTablesData"

const CustomeHoverTableBody = () => {
  return (
    <tbody>
      {customTableColorData.map((item) => (
        <tr key={item.id}>
          <th scope="row">{item.id}</th>
          <td>{item.title}</td>
          <td>{item.releasedDate}</td>
          <td>{item.studio}</td>
          <td>{item.budget}</td>
          <td>{item.gross}</td>
        </tr>
      ))}
    </tbody>
  )
}

export default CustomeHoverTableBody