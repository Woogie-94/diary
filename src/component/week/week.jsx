import React from "react";
import Day from "../day/day";
import styles from "./week.module.css";

const Week = ({ week, calendarData: { today } }) => {
  return (
    <div className={styles.week}>
      <div className={styles.weekly}></div>
      {week.map((day, i) => {
        return <Day day={day.format("D")} currentM={day.format("MM")} toDayM={today.format("MM")} key={i} />;
      })}
    </div>
  );
};

export default Week;
