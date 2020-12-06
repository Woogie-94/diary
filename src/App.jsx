import React, { useState } from "react";
import CalendarJs from "./service/calendar";
import Calendar from "./component/calendar/calendar";
import styles from "./App.module.css";

const App = (props) => {
  const [monthChange, setMonthChange] = useState(0);
  const calendarJs = new CalendarJs(monthChange);

  calendarJs.calenarLoop();
  console.log(calendarJs);
  const monthChangeFn = (e) => (e.target.id === "prev" ? setMonthChange(monthChange - 1) : setMonthChange(monthChange + 1));

  return (
    <div>
      <div className={styles.calendarBtn} onClick={monthChangeFn}>
        <button className={styles.prevBtn} id="prev"></button>
        <button className={styles.nextBtn} id="next"></button>
      </div>
      <Calendar calendarData={calendarJs} />
    </div>
  );
};

export default App;
