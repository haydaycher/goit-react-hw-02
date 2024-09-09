import { useEffect, useState } from "react";

import Description from "../Description/Description";
import Feedback from "../Feedback/Feedback";
import Options from "../Options/Options";
import Notification from "../Notification/Notification";
import s from "../App/App.module.css";

const initialValues = {
  good: 0,
  neutral: 0,
  bad: 0,
};

const getInitialValues = () => {
  const savedValues = window.localStorage.getItem("my-values");
  return savedValues !== null ? JSON.parse(savedValues) : initialValues;
};

export default function App() {
  const [values, setValues] = useState(getInitialValues);

  const updateFeedback = (feedbackType) => {
    setValues((values) => ({
      ...values,
      [feedbackType]: values[feedbackType] + 1,
    }));
  };

  const totalFeedback = values.good + values.neutral + values.bad;
  const positiveFeedback = Math.round((values.good / totalFeedback) * 100);

  const reset = () => {
    setValues(initialValues);
  };

  useEffect(() => {
    window.localStorage.setItem("my-values", JSON.stringify(values));
  }, [values]);

  return (
    <div className={s.wrapper}>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        reset={reset}
      />
      {totalFeedback ? (
        <Feedback
          values={values}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
}
