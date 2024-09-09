import s from "../Options/Options.module.css";
export default function Options({ updateFeedback, totalFeedback, reset }) {
  return (
    <div className={s.options}>
      <button className={s.btn} onClick={() => updateFeedback("good")}>
        Good
      </button>
      <button className={s.btn} onClick={() => updateFeedback("neutral")}>
        Neutral
      </button>
      <button className={s.btn} onClick={() => updateFeedback("bad")}>
        Bad
      </button>
      {totalFeedback ? (
        <button className={s.btn} onClick={reset}>
          Reset
        </button>
      ) : (
        ""
      )}
    </div>
  );
}
