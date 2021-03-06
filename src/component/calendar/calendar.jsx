import React, { memo } from "react";
import Week from "../week/week";
import styles from "./calendar.module.css";

const Calendar = memo(({ calendarData, setDayData, dayData, weekData, setWeekData, setOpenCheck }) => {
  return (
    <>
      <div className={styles.calendar}>
        <div className={`${styles.week} clear_fix`}>
          <div className={`${styles.ym} ${styles.item}`}>
            <p>{calendarData.today.format("YYYY")}</p>
            {`${calendarData.today.format("MM")}월`}
          </div>
          <div className={styles.item}>Sunday</div>
          <div className={styles.item}>Monday</div>
          <div className={styles.item}>Tuesday</div>
          <div className={styles.item}>Wednesday</div>
          <div className={styles.item}>Thursday</div>
          <div className={styles.item}>Friday</div>
          <div className={styles.item}>Saturday</div>
        </div>
        {calendarData.calendarArr.map((week, i) => {
          return <Week className={styles.week} calendarData={calendarData} week={week} key={i} dayData={dayData} setDayData={setDayData} weekData={weekData} setWeekData={setWeekData} setOpenCheck={setOpenCheck} />;
        })}
      </div>
    </>
  );
});

export default Calendar;
