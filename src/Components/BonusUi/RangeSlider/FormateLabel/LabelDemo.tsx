import React, { useState } from "react";
import { Range, getTrackBackground } from "react-range";
import { Col } from "reactstrap";

const LabelDemo = () => {
  const [values5, setValues5] = useState([10]);
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
          values={values5}
          step={1.0}
          min={0.0}
          max={20.0}
          onChange={(values5) => setValues5(values5)}
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
              <output style={{ marginTop: "12px" }}>0 kg</output>
              <div
                ref={props.ref}
                style={{
                  height: "5px",
                  width: "100%",
                  borderRadius: "4px",
                  background: getTrackBackground({
                    values: values5,
                    colors: ["#33bfbf", "#ccc"],
                    min: 0,
                    max: 20,
                  }),
                  alignSelf: "center",
                }}
              >
                {children}
              </div>
              <output style={{ marginTop: "12px" }}>20 kg</output>
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
          {values5[0]} kg
        </output>
      </div>
    </Col>
  );
};

export default LabelDemo;
