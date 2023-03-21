// basic
import { useState, useEffect } from "react";

// components
import Board from "../board/Board";

// styles
import "./App.css";

export default function App() {
  const [steps, setStep] = useState(0);
  const [startChoice, setStartChoice] = useState("Choose your side");
  const [history, setHistory] = useState({});
  const [win, setWin] = useState("");
  const [reset, setReset] = useState(false);
  const [actualValue, setActualValue] = useState(startChoice);

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
      setStartChoice("Choose your side");
      setHistory({});
      setWin("");
      setReset(false);
    }

    if (win.length > 0) return;

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
        return isWinner ? setWin(isWinner) : null;
      }

      return;
    };

    checkWinner(history);
  }, [history, win, reset]);

  const isOver = () => {
    return steps >= 9 ? null : setStep((step) => step + 1);
  };

  const onCurrStep = (e) => {
    let nextSymbol = startChoice === "X" ? "O" : "X";
    let isNext = steps % 2 === 0 ? startChoice : nextSymbol;
    setHistory((obj) => ({ ...obj, [e.target.id]: isNext }));
    setActualValue(steps % 2 === 1 ? startChoice : nextSymbol);
  };

  const onChooseYourSideBtns = () => {
    const btns = [
      { className: "choice choice_cross", content: "X", id: 1 },
      { className: "choice choice_zero", content: "O", id: 2 },
    ];

    return btns.map(({ content, id, ...btns }) => {
      return (
        <button
          onClick={() => setStartChoice(content)}
          disabled={startChoice.length === 1 && steps <= 9 ? true : false}
          key={id}
          {...btns}
        >
          {content}
        </button>
      );
    });
  };

  console.log(startChoice);
  console.log(steps);
  return (
    <div className="App">
      <h1>{win ? `WIN: ${win} =)` : `Now: ${actualValue}`}</h1>
      <Board
        history={history}
        onCurrStep={onCurrStep}
        isOver={isOver}
        startChoice={startChoice}
        reset={reset}
        win={win}
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
