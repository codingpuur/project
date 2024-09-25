import { CardHeader } from "reactstrap";
import { StockResult } from "@/utils/Constant";

const StockResultCardHeader = () => {
  return (
    <CardHeader className='pb-0 card-no-border'>
      <h3>{StockResult}</h3>
      <span>Data within DataTables can be easily rendered to add graphics orcolour to your tables, as demonstrated in the example on this page.These examples make use of columns.render and drawCallback tocustomise the cells in three ways:</span>
      <span>1. the colour of the cell is determine by the relative price of the stock.</span>
      <span>2. a 'sparkline' class is added to the numeric array in the 'last' column.</span>
      <span>3. the jQuery Sparklines plugin is called to turn that array into a line graph.</span>
    </CardHeader>
  );
};

export default StockResultCardHeader;
