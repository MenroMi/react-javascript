// basic
import { useState, useEffect } from "react";

// hooks
import useInputInfo from "../../hooks/useInfo";

// additional functions
import checkWinner from "../../functions/checkingWinner";

// components
import Board from "../board/Board";
import Information from "../header-information/HeaderInformation";
import CreateButton from "../buttons/Buttons";

// styles
import "./App.css";

export default function App() {
  const [steps, setStep] = useState(0);
  const [history, setHistory] = useState({});
  const [reset, setReset] = useState(false);
  const startChoice = useInputInfo("Choose your side");
  const actualValue = useInputInfo("Choose your side");
  const winner = useInputInfo("");

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

    checkWinner(history, winner); // additional function for validate game result
  }, [history, winner.value, reset]);

  const isOver = () => {
    return steps >= 8 ? null : setStep((step) => step + 1);
  };

  const onCurrStep = (e) => {
    let nextSymbol = startChoice.value === "X" ? "O" : "X";
    let isNext = steps % 2 === 0 ? startChoice.value : nextSymbol;
    setHistory((obj) => ({ ...obj, [e.target.id]: isNext }));

    if (steps >= 8) {
      actualValue.onSetNewValue(`Draw ${String.fromCodePoint(0x1f643)}`);
    } else {
      actualValue.onSetNewValue(
        steps % 2 === 1 ? startChoice.value : nextSymbol
      );
    }
  };

  return (
    <div className="App">
      <Information winner={winner} actualValue={actualValue} />
      <Board
        history={history}
        onCurrStep={onCurrStep}
        isOver={isOver}
        startChoice={startChoice.value}
        reset={reset}
        win={winner.value}
      />
      <div className="wrapper-btns">
        <CreateButton startChoice={startChoice} steps={steps} />
      </div>
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
