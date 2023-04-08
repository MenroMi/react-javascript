// basic
import { useState } from "react";

import CalculatorListCells from "../components/CalculatorListCells/CalculatorListCells";
import ViewExpression from "../components/ViewExpression/ViewExpression";

export default function App() {
  const [operands, setOperands] = useState({ left: "", right: "" });
  const [operator, setOperator] = useState("");
  const [prevInput, setPrevInput] = useState("");
  const [actInput, setActInput] = useState("");

  const left = operands.left;
  const right = operands.right;
  const expressions = {
    "÷": (x, y) => x / y,
    "\u00D7": (x, y) => x * y,
    "-": (x, y) => x - y,
    "+": (x, y) => x + y,
    "%": (x, y = 100) => (y === 100 ? x / +y : (x * y) / 100),
  };

  const onChangeActualInput = (value) => {
    const valueIsOperator = Object.keys(expressions).includes(value);
    const onlyMinus = left.length === 1 && left[0] === "-";
    let startRightOperand;

    if (right.includes("-") && operator === "-") {
      startRightOperand = actInput.slice(actInput.lastIndexOf(operator));
    } else {
      startRightOperand = actInput.slice(actInput.lastIndexOf(operator) + 1);
    }

    if (value === "•") value = ".";

    if (left.includes(".") && value === "." && !operator) {
      value = "";
    } else if (right.includes(".") && value === ".") {
      value = "";
    }

    if (value === "-" && !operator && !actInput && !left.includes("-")) {
      setOperands((opr) => ({ ...opr, left: "-" }));
      setActInput((input) => input + value);
      return;
    }

    if (
      value === "-" &&
      !!operator &&
      !right.includes("-") &&
      right.length === 0
    ) {
      setOperands((opr) => ({ ...opr, right: "-" }));
      setActInput((input) => input + value);
      return;
    }

    if (!operator && valueIsOperator && !onlyMinus && left) {
      setOperator(value);
      setActInput((input) => input + value);
      return;
    }

    if (!operator && !valueIsOperator) {
      setOperands((opr) => ({ ...opr, left: actInput + value }));
    } else if (operator && !valueIsOperator) {
      setOperands((opr) => ({ ...opr, right: startRightOperand + value }));
      setActInput((input) => input + value);
      return;
    }

    return !valueIsOperator ? setActInput((input) => input + value) : null;
  };

  const onRemoveAll = () => {
    setActInput("");
    setPrevInput("");
    setOperands({ left: "", right: "" });
    setOperator("");
  };

  const onRemoveOneChar = () => {
    const removeChar = () => {
      if (right) {
        setOperands(({ left, right }) => ({ left, right: right.slice(0, -1) }));
        setActInput((input) => input.slice(0, -1));
        return;
      }

      if (!right && operator) {
        setOperator("");
        setActInput((input) => input.trim().slice(0, -1));
        return;
      }

      if (!operator) {
        setOperands(({ left, right }) => ({ right, left: left.slice(0, -1) }));
        setActInput((input) => input.slice(0, -1));
        return;
      }
    };

    if (actInput.length >= 1) {
      removeChar();
    }

    return null;
  };

  const onEqual = () => {
    let res;

    if (operator === "%" && right.length === 0) {
      res = expressions[operator](+left);
    } else {
      res = expressions[operator](+left, +right);
    }

    if (operator !== "%" && left && !right) {
      return null;
    }

    let countAfterDot = String(res).slice(String(res).indexOf("."));

    if (!Number.isInteger(res) && countAfterDot.length > 5) {
      res = res.toFixed(6);
    }
    if (isNaN(res) || res === Infinity || res === -Infinity) {
      res = 0;
    }

    setPrevInput(actInput);
    setActInput(!res ? "" : String(res));
    setOperands(() => ({ left: !res ? "" : String(res), right: "" }));
    setOperator("");
  };

  return (
    <div
      className={`flex flex-col justify-end gap-y-5.5 m-auto h-812 bg-main w-375`}
    >
      <ViewExpression actInput={actInput} prevInput={prevInput} />
      <CalculatorListCells
        onChangeInput={(value) => onChangeActualInput(value)}
        onRemoveAll={onRemoveAll}
        onRemoveOneChar={onRemoveOneChar}
        onEqual={onEqual}
      />
    </div>
  );
}
