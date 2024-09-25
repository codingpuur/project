import { Card, CardBody } from "reactstrap";
import { WomenPinkshirt } from "@/utils/Constant";
import ProductColor from "./ProductColor";
import ProductTables from "./ProductTables";
import ProductShare from "./ProductShare";
import ProductRate from "./ProductRate";
import ProductButtons from "./ProductButtons";

const ProductDetails = () => {
  return (
    <Card>
      <CardBody>
        <div className="product-page-details">
          <h3>{WomenPinkshirt}</h3>
        </div>
        <div className="product-price">
          $26.00
          <del>$350.00 </del>
        </div>
        <ProductColor />
        <hr />
        <p>
          {"Rock Paper Scissors Various Dots Half Sleeves Girl’s Regular Fit T-Shirt I 100% Cotton T Shirt with Half Sleeve Round Neck I Regular Wear Solid Kids Tees and Black Sleeve."}
        </p>
        <hr />
        <ProductTables />
        <hr />
        <ProductShare />
        <hr />
        <ProductRate />
        <hr />
        <ProductButtons />
      </CardBody>
    </Card>
  );
};

export default ProductDetails;
