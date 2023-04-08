export default function CalculatorCell({
  content,
  classStyle,
  onChangeInput,
  onRemoveAll,
  onRemoveOneChar,
  onEqual,
}) {
  const func = onChangeInput || onRemoveAll || onRemoveOneChar || onEqual;

  return (
    <button
      onClick={() => {
        func(content);
      }}
      className={`w-full border-main border-b-cell hover:brightness-110 active:brightness-125 ${classStyle}`}
    >
      {`${content}`.includes(".svg") ? (
        <img className="m-auto" src={content} />
      ) : (
        content
      )}
    </button>
  );
}
