import React, { useState } from "react";

export default function Calculator() {
  const [value, setValue] = useState("");

  const toEval = (e) => {
    setValue(value + e.target.value);
  };

  const result = () => {
    try {
      // eslint-disable-next-line no-eval
      setValue(eval(value));
    } catch (error) {
      setValue("Error");
    }
  };

  const del = () => {
    setValue(value.slice(0, -1));
  };

  const sqofanum = () => {
    setValue(Math.pow(value, 2));
  };

  const clr = () => {
    setValue("");
  };

  return (
    <div className="container">
      <div className="calculator">
        <input id="display" value={value} type="text" readOnly />
        <div className="keys">
          <button onClick={clr} className="operand-btn">
            AC
          </button>
          <button onClick={del} className="operand-btn">
            DEL
          </button>
          <button value="%" onClick={toEval} className="operand-btn">
            %
          </button>
          <button onClick={sqofanum} className="operand-btn">
            x<sup>2</sup>
          </button>
          <button value="7" onClick={toEval}>
            7
          </button>
          <button value="8" onClick={toEval}>
            8
          </button>
          <button value="9" onClick={toEval}>
            9
          </button>
          <button value="+" onClick={toEval} className="operand-btn">
            +
          </button>
          <button value="4" onClick={toEval}>
            4
          </button>
          <button value="5" onClick={toEval}>
            5
          </button>
          <button value="6" onClick={toEval}>
            6
          </button>
          <button value="-" onClick={toEval} className="operand-btn">
            -
          </button>
          <button value="1" onClick={toEval}>
            1
          </button>
          <button value="2" onClick={toEval}>
            2
          </button>
          <button value="3" onClick={toEval}>
            3
          </button>
          <button value="*" onClick={toEval} className="operand-btn">
            *
          </button>
          <button value="0" onClick={toEval}>
            0
          </button>
          <button value="." onClick={toEval}>
            .
          </button>
          <button value="=" onClick={result}>
            =
          </button>
          <button value="/" onClick={toEval} className="operand-btn">
            /
          </button>
        </div>
      </div>
    </div>
  );
}
