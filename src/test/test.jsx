import React from "react";
import moment from "moment";
import styels from "./test.module.css";

const Test = (props) => {
  function calendarLoop() {
    const today = moment();

    const startWeek = today.startOf("month").week();
    const endWeek = today.endOf("month").week() === 1 ? 53 : today.clone().endOf("month").week();
    const blankWeek = endWeek - startWeek === 4 ? endWeek + 1 : endWeek;

    let calendar = [];
    for (let week = startWeek; week <= blankWeek; week++) {
      calendar.push(
        Array(7)
          .fill(0)
          .map((n, i) => {
            let current = today
              .clone()
              .week(week)
              .startOf("week")
              .add(n + i, "day");
            return today.format("MM") === "12" ? current.add(1, "day") : current;
          })
      );
    }
    return calendar;
  }

  return (
    <div className={styels.calendar}>
      {calendarLoop().map((week) => (
        <div className={styels.week}>
          <div className={styels.day}></div>
          {week.map((day) => (
            <div className={styels.day}>{day.format("D")}</div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Test;
