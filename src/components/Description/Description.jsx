
import s from "./Description.module.css";

export default function Description() {
  return (
    <>
      <h1>Sip Happens Café</h1>
      <p className={s.textDescription}>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
    </>
  );
}
