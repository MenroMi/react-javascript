export default function ViewExpression({ actInput, prevInput }) {
  let styleView =
    "flex flex-col w-full px-19px text-white items-end leading-10 text-right";
  let styleActualInput = "break-all text-right";
  let stylePrevInput = "text-base-small break-all leading-8";

  if (actInput.length >= 8) {
    styleActualInput += " text-less leading-10";
  } else {
    styleActualInput += " text-base";
  }

  return (
    <div className={styleView}>
      <p className={stylePrevInput}>
        {prevInput.length === 0 ? "" : prevInput}
      </p>
      <h1 className={styleActualInput}>
        {actInput.length === 0 ? "0" : actInput}
      </h1>
    </div>
  );
}
