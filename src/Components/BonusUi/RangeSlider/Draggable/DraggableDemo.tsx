import { useState } from "react";
import { Range, getTrackBackground } from "react-range";
import { Col } from "reactstrap";

const DraggableDemo = () => {
  const STEP = 1;
  const MIN = 0;
  const MAX = 100;
  const [values, setValues] = useState([20, 60]);
  return (
    <Col md={10}>
      <Range
        values={values}
        step={STEP}
        min={MIN}
        max={MAX}
        onChange={(values) => {
          setValues(values);
        }}
        renderTrack={({ props, children }) => (
          <div
            onMouseDown={props.onMouseDown}
            onTouchStart={props.onTouchStart}
            style={{
              ...props.style,
              height: "36px",
              display: "flex",
              width: "100%",
            }}
          >
            <output style={{ marginTop: "12px" }}>{MIN}</output>
            <div
              ref={props.ref}
              style={{
                height: "5px",
                width: "100%",
                borderRadius: "4px",
                background: getTrackBackground({
                  values,
                  colors: ["#ccc", "#F8AA4B", "#ccc"],
                  min: MIN,
                  max: MAX,
                }),
                alignSelf: "center",
              }}
            >
              {children}
            </div>
            <output style={{ marginTop: "12px" }}>{MAX}</output>
          </div>
        )}
        renderThumb={({ props, isDragged }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: "35px",
              width: "35px",
              borderRadius: "30px",
              backgroundColor: "#FFF",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: "0px 2px 6px #AAA",
            }}
          >
            <div style={{ height: "16px", width: "5px", backgroundColor: isDragged ? "#4d8aff" : "#CCC" }} />
          </div>
        )}
      />
    </Col>
  );
};

export default DraggableDemo;
