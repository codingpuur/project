import { Fragment } from "react";
import { Alert, Col } from "reactstrap";
import { Href } from "@/utils/Constant";
import Link from "next/link";
import { alertColorData } from "@/Data/Uikits/Alert/AlertData";

const LightColorRight = () => {
  return (
    <Col xl={6}>
      {alertColorData &&
        alertColorData.slice(3).map((item, index) => (
          <Fragment key={index}>
            <p className='mb-0'>{item.title} Alert</p>
            <Alert color={item.color} className={`alert-light-${item.color} border-0`}>
              <p className={`txt-${item.color === "light" ? "dark" : item.color}`}>
                This is a
                <Link className={`alert-link txt-${item.color === "light" ? "dark" : item.color}`} href={Href}>
                  {item.color} alert{" "}
                </Link>{" "}
                with an example link.Check it out.
              </p>
            </Alert>
          </Fragment>
        ))}
    </Col>
  );
};

export default LightColorRight;
