import CalculatorCell from "../CalculatorCell/CalculatorCell";
import remover from "../../assets/remover.svg";

export default function CalculatorListCells({
  onChangeInput,
  onRemoveAll,
  onRemoveOneChar,
  onEqual,
}) {
  const cells = [
    "C",
    "÷",
    "\u00D7",
    "del-one",
    7,
    8,
    9,
    "-",
    4,
    5,
    6,
    "+",
    1,
    2,
    3,
    "=",
    "%",
    0,
    "•",
  ];

  const setTopLevel = () => {
    return cells.map((item, i) => {
      switch (item) {
        case "C":
          return (
            <CalculatorCell
              key={i}
              content={item}
              onRemoveAll={onRemoveAll}
              classStyle="h-94 bg-cell-n text-2xl rounded-tl-30"
            />
          );
        case "del-one":
          return (
            <CalculatorCell
              key={i}
              content={remover}
              onRemoveOneChar={onRemoveOneChar}
              classStyle="h-94 bg-cell-n rounded-tr-30 col-start-4 row-start-1"
            />
          );
        case "÷":
          return (
            <CalculatorCell
              key={i}
              content={item}
              onChangeInput={onChangeInput}
              classStyle="h-94 bg-cell-n text-5xl text-yellow-cell col-start-2"
            />
          );
        case "\u00D7":
          return (
            <CalculatorCell
              key={i}
              content={item}
              onChangeInput={onChangeInput}
              classStyle="h-94 bg-cell-n text-5xl text-yellow-cell col-start-3 row-start-1"
            />
          );
      }
    });
  };

  const setRowsLevels = () => {
    return cells.map((item, i) => {
      if (typeof item === "number" || item === "%" || item === "•") {
        return (
          <CalculatorCell
            key={i}
            onChangeInput={onChangeInput}
            content={item}
            classStyle="h-94 bg-cell-math text-2xl"
          />
        );
      }
    });
  };

  const setSideLevel = () => {
    return cells.map((item, i) => {
      switch (item) {
        case "-":
          return (
            <CalculatorCell
              key={i}
              content={item}
              onChangeInput={onChangeInput}
              classStyle="h-94 bg-cell-n text-6xl text-yellow-cell  col-start-4 row-start-2"
            />
          );
        case "+":
          return (
            <CalculatorCell
              key={i}
              content={item}
              onChangeInput={onChangeInput}
              classStyle="h-94 bg-cell-n text-5xl text-yellow-cell  col-start-4 row-start-3"
            />
          );
        case "=":
          return (
            <CalculatorCell
              key={i}
              content={item}
              onEqual={onEqual}
              classStyle="h-188 bg-yellow-cell text-5xl col-start-4 row-start-4 row-end-6"
            />
          );
      }
    });
  };

  return (
    <div className="grid grid-rows-5 grid-cols-4 text-white">
      {setTopLevel()}
      {setRowsLevels()}
      {setSideLevel()}
    </div>
  );
}
