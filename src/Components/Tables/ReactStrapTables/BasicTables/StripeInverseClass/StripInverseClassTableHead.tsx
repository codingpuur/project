import { Calories, Dessert, DessertType, Fat, Id, Price, Weigth } from '../../../../../utils/Constant'

const StripInverseClassTableHead = () => {
  return (
    <thead>
      <tr>
        <th scope="col">{Id}</th>
        <th scope="col">{Dessert}</th>
        <th scope="col">{DessertType}</th>
        <th scope="col">{Calories}</th>
        <th scope="col">{Weigth}</th>
        <th scope="col">{Fat}</th>
        <th scope="col">{Price}</th>
      </tr>
    </thead>
  )
}

export default StripInverseClassTableHead