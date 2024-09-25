import { useState } from "react";
import { Range, getTrackBackground } from "react-range";

const BasicRangeDemo = () => {
  const [values1, setValues1] = useState([550]);
  return (
    <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", margin: "1em" }}>
      <Range
        values={values1}
        step={1}
        min={100}
        max={1000}
        onChange={(values1) => setValues1(values1)}
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
                  values: values1,
                  colors: ["#35bfbf", "#ccc"],
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
            <div style={{ height: "16px", width: "5px", backgroundColor: isDragged ? "#4d8aff" : "#CCC" }} />
          </div>
        )}
      />
      <output style={{ marginTop: "12px" }} id='output'>
        {values1[0]}
      </output>
    </div>
  );
};

export default BasicRangeDemo;
