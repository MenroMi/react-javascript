export default function CreateButton({ startChoice, steps }) {
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
}
