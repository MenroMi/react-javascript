import "./ErrorHeaderComponent.scss";

export default function ErrorHeaderComponent({ title, onReroll }) {
  return (
    <div className="error-random-anime">
      <h2 className="error-random-anime__title">{title}</h2>
      <div className="error-random-anime__buttons">
        <button onClick={onReroll} className="button button-reroll">
          Re-roll
        </button>
      </div>
    </div>
  );
}
