import { Classprefix, Collapsedtostart, Collg, Colmd, Cols, Colsm, Columnordering, Colxl, Colxxl, Gridbehavior, Gutterwidth, Gutterwidthno, Horizontaltimes, Maxcontainerwidth, Nestable, None, Ofcolumns, Offsets, Px1140, Px1320, Px540, Px720, Px960, Yes} from "@/utils/Constant";

const GridTableBody = () => {
  return (
    <tbody>
      <tr>
        <th className="text-nowrap" scope="row">{Gridbehavior}</th>
        <td>{Horizontaltimes}</td>
        <td colSpan={5}>{Collapsedtostart}</td>
      </tr>
      <tr>
        <th className="text-nowrap" scope="row">{Maxcontainerwidth}</th>
        <td>{None}</td>
        <td>{Px540}</td>
        <td>{Px720}</td>
        <td>{Px960}</td>
        <td>{Px1140}</td>
        <td>{Px1320}</td>
      </tr>
      <tr>
        <th className="text-nowrap" scope="row">{Classprefix}</th>
        <td><code>{Cols}</code></td>
        <td><code>{Colsm}</code></td>
        <td><code>{Colmd}</code></td>
        <td><code>{Collg}</code></td>
        <td><code>{Colxl}</code></td>
        <td><code>{Colxxl}</code></td>
      </tr>
      <tr>
        <th className="text-nowrap" scope="row">{Ofcolumns}</th>
        <td colSpan={6}>12</td>
      </tr>
      <tr>
        <th className="text-nowrap" scope="row">{Gutterwidth}</th>
        <td colSpan={6}>{Gutterwidthno}</td>
      </tr>
      <tr>
        <th className="text-nowrap" scope="row">{Nestable}</th>
        <td colSpan={6}>{Yes}</td>
      </tr>
      <tr>
        <th className="text-nowrap" scope="row">{Offsets}</th>
        <td colSpan={6}>{Yes}</td>
      </tr>
      <tr>
        <th className="text-nowrap" scope="row">{Columnordering}</th>
        <td colSpan={6}>{Yes}</td>
      </tr>
    </tbody>
  );
};

export default GridTableBody;
