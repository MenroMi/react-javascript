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
