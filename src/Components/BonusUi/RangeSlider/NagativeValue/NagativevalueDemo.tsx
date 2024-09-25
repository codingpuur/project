import { useState } from "react";
import { Range, getTrackBackground } from "react-range";
import { Col } from "reactstrap";

const NagativevalueDemo = () => {
  const [values2, setValues2] = useState([550]);
  return (
    <Col md={10}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          margin: "1em",
        }}
      >
        <Range
          values={values2}
          step={1}
          min={100}
          max={1000}
          onChange={(values1) => setValues2(values1)}
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
              <output style={{ marginTop: "12px" }}>100</output>
              <div
                ref={props.ref}
                style={{
                  height: "10px",
                  width: "100%",
                  borderRadius: "4px",
                  background: getTrackBackground({
                    values: values2,
                    colors: ["#ff6150", "#ccc"],
                    min: 100,
                    max: 1000,
                  }),
                  alignSelf: "center",
                }}
              >
                {children}
              </div>
              <output style={{ marginTop: "12px" }}>1000</output>
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
              <div
                style={{
                  height: "16px",
                  width: "5px",
                  backgroundColor: isDragged ? "#4d8aff" : "#CCC",
                }}
              />
            </div>
          )}
        />
        <output style={{ marginTop: "12px" }} id='output'>
          {values2[0]}
        </output>
      </div>
    </Col>
  );
};

export default NagativevalueDemo;
