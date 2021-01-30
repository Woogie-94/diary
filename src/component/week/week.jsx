import React, { memo } from "react";
import Day from "../day/day";
import styles from "./week.module.css";

const Week = memo(({ week, calendarData: { today }, dayData, setDayData, setOpenCheck, weekData, setWeekData }) => {
  const click = () => {
    const targetWeek = week.map((el) => el.clone().startOf("week").format("YYYYMMDD"));

    setWeekData([...weekData, { id: `week${targetWeek[0]}`, time: week, textArr: [], checkList: [], checked: [false, false, false, false, false] }]);
    setOpenCheck({ id: `week${targetWeek[0]}` });
    weekData.map((data) => data.id === `week${targetWeek[0]}` && setWeekData(weekData));
  };

  return (
    <div className={`${styles.week} clear_fix`}>
      <div className={styles.weekly} onClick={click}>
        <ul className={`${styles.list_box} `}>
          {weekData.map(
            (data) =>
              data.id === `week${week[0].format("YYYYMMDD")}` &&
              data.checkList.map((list, i) => (
                <li key={i} className={`${styles.list} ${data.checked[i] && styles.list_checked}`}>
                  - {list}
                </li>
              ))
          )}
        </ul>
      </div>
      {week.map((day, i) => {
        return <Day day={day} currentM={day.format("MM")} toDayM={today.format("MM")} key={i} dayData={dayData} setDayData={setDayData} setOpenCheck={setOpenCheck} />;
      })}
    </div>
  );
});

export default Week;
