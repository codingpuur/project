import { Hours, Id, Spots, Trainer, Type, ClassNames } from '../../../../../utils/Constant'

const DashedBorderClassTableHead = () => {
  return (
    <thead>
      <tr className="dashed">
        <th scope="col">{Id}</th>
        <th scope="col">{ClassNames}</th>
        <th scope="col">{Type}</th>
        <th scope="col">{Hours}</th>
        <th scope="col">{Trainer}</th>
        <th scope="col">{Spots}</th>
      </tr>
    </thead>
  )
}

export default DashedBorderClassTableHead