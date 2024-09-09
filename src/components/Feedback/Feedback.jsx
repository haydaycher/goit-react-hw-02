import s from "..//Feedback/Feedback.module.css";
export default function Feedback({
  values: { good, neutral, bad },
  totalFeedback,
  positiveFeedback,
}) {
  return (
    <ul className={s.feedbackList}>
      <li className={s.feedbackItem}>Good: {good}</li>
      <li className={s.feedbackItem}>Neutral: {neutral}</li>
      <li className={s.feedbackItem}>Bad: {bad}</li>
      <li className={s.feedbackItem}>Total: {totalFeedback}</li>
      <li className={s.feedbackItemPositive}>Positive: {positiveFeedback}%</li>
    </ul>
  );
}
