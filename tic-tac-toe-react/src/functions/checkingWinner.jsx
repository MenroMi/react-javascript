export default function checkWinner(stepsDone, win) {
  // let timer = performance.now();
  // while (performance.now() - timer < 500) {}
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
    return isWinner ? win.onSetNewValue(isWinner) : null;
  }

  return;
}
