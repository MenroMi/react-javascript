export default function Information({ winner, actualValue }) {
  return (
    <h1>
      {winner.value
        ? `WIN: ${winner.value} ${String.fromCodePoint(0x1f973)}`
        : `Now: ${actualValue.value}`}
    </h1>
  );
}
