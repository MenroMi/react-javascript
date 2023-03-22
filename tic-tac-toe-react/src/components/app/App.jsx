// basic
import { useState, useEffect } from "react";

// hooks
import useInputInfo from "../../hooks/useInfo";

// components
import Board from "../board/Board";

// styles
import "./App.css";

export default function App() {
  const [steps, setStep] = useState(0);
  const [history, setHistory] = useState({});
  const [reset, setReset] = useState(false);
  const startChoice = useInputInfo("Choose your side");
  const actualValue = useInputInfo("Choose your side");
  const winner = useInputInfo("");

  let winnerSteps = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
  ];

  useEffect(() => {
    if (reset) {
      setStep(0);
      startChoice.onSetNewValue("Choose your side");
      actualValue.onSetNewValue("Choose your side");
      winner.onSetNewValue("");
      setHistory({});
      setReset(false);
    }

    if (winner.value.length > 0) return;

    const checkWinner = (stepsDone) => {
      if (Object.keys(stepsDone).length <= 0) {
        return;
      }

      let lines = winnerSteps
        .map((lines) =>
          lines
            .map((line) => (stepsDone[line] ? stepsDone[line] : null))
            .filter((elem) => elem)
        )
        .filter((item) => item.length === 3);

      if (lines.length >= 1) {
        let isWinner = lines.map((arr) =>
          arr.reduce((prev, curr) => {
            return prev === curr ? curr : false;
          })
        );
        isWinner = isWinner.filter((elem) => elem).join("");
        return isWinner ? winner.onSetNewValue(isWinner) : null;
      }

      return;
    };

    checkWinner(history);
  }, [history, winner.value, reset]);

  const isOver = () => {
    return steps >= 8 ? null : setStep((step) => step + 1);
  };

  const onCurrStep = (e) => {
    let nextSymbol = startChoice.value === "X" ? "O" : "X";
    console.log(steps);
    let isNext = steps % 2 === 0 ? startChoice.value : nextSymbol;
    setHistory((obj) => ({ ...obj, [e.target.id]: isNext }));

    if (steps >= 8) {
      actualValue.onSetNewValue("Draw ><");
    } else {
      actualValue.onSetNewValue(
        steps % 2 === 1 ? startChoice.value : nextSymbol
      );
    }
  };

  const onChooseYourSideBtns = () => {
    const btns = [
      { className: "choice choice_cross", content: "X", id: 1 },
      { className: "choice choice_zero", content: "O", id: 2 },
    ];

    return btns.map(({ content, id, ...btns }) => {
      return (
        <button
          onClick={() => startChoice.onSetNewValue(content)}
          disabled={startChoice.value.length === 1 && steps <= 9 ? true : false}
          key={id}
          {...btns}
        >
          {content}
        </button>
      );
    });
  };

  return (
    <div className="App">
      <h1>
        {winner.value ? `WIN: ${winner.value} =)` : `Now: ${actualValue.value}`}
      </h1>
      <Board
        history={history}
        onCurrStep={onCurrStep}
        isOver={isOver}
        startChoice={startChoice.value}
        reset={reset}
        win={winner.value}
      />
      <div className="wrapper-btns">{onChooseYourSideBtns()}</div>
      <button
        onClick={() => setReset(true)}
        className={`choice choice_again${steps <= 0 ? "" : " active"}`}
        disabled={steps <= 0 ? true : false}
      >
        Again?
      </button>
    </div>
  );
}
