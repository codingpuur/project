import { gridTableHeadData } from "@/Data/Uikits/Grid/GridData";

const GridTableHead = () => {
  return (
    <thead>
      <tr>
        <th></th>
        {gridTableHeadData &&
          gridTableHeadData.map((item, index) => (
            <th key={index} className="text-center">
              {item.text1}
              <br />
              {item.class ? (
                <small className={item.class}>{item.text2}</small>
              ) : (
                <small>{item.text2}</small>
              )}
            </th>
          ))}
      </tr>
    </thead>
  );
};

export default GridTableHead;
