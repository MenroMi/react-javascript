// basic
import { useState } from "react";

// plugins
// import uuid4 from "uuid4";

// components
import Square from "../square/Square";

// styles
import "./Board.css";

export default function Board({
  isOver,
  onCurrStep,
  history,
  startChoice,
  reset,
  win,
}) {
  const createSquares = () => {
    const squares = [...new Array(3).fill(null)];
    let key = 0;

    return squares.map(() => {
      return (
        <div className="row" key={key}>
          {squares.map(() => {
            key++;
            return (
              <Square
                onCurrStep={onCurrStep}
                isOver={isOver}
                key={key}
                id={key}
                value={history[key] ? history[key] : null}
                startChoice={startChoice}
                reset={reset}
                win={win}
              />
            );
          })}
        </div>
      );
    });
  };

  return <div className="box">{createSquares()}</div>;
}

/**
 *       <div className="row">
        <Square
          onNextStep={onNextStep}
          isOver={isOver}
          key={1}
          id={1}
          value=""
        />
        <Square
          onNextStep={onNextStep}
          isOver={isOver}
          key={2}
          id={2}
          value=""
        />
        <Square
          onNextStep={onNextStep}
          isOver={isOver}
          key={3}
          id={3}
          value=""
        />
      </div>
      <div className="row">
        <Square
          onNextStep={onNextStep}
          isOver={isOver}
          key={4}
          id={4}
          value=""
        />
        <Square
          onNextStep={onNextStep}
          isOver={isOver}
          key={5}
          id={5}
          value=""
        />
        <Square
          onNextStep={onNextStep}
          isOver={isOver}
          key={6}
          id={6}
          value=""
        />
      </div>
      <div className="row">
        <Square
          onNextStep={onNextStep}
          isOver={isOver}
          key={7}
          id={7}
          value=""
        />
        <Square
          onNextStep={onNextStep}
          isOver={isOver}
          key={8}
          id={8}
          value=""
        />
        <Square
          onNextStep={onNextStep}
          isOver={isOver}
          key={9}
          id={9}
          value=""
        />
      </div>
 */
