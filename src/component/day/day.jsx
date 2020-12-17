import React, { memo } from "react";
import styles from "./day.module.css";

const Day = memo(({ day, toDayM, currentM, dayData, setDayData, setOpenCheck }) => {
  const offDay = currentM !== toDayM ? styles.off : styles.on;

  const handleClick = (e) => {
    const target = e.target.classList;
    const today = day.format("YYYYMMDD");

    for (const i of target) {
      if (i === styles.on) {
        setDayData([...dayData, { id: today, time: day, checkList: [], checked: [false, false, false, false, false] }]);
        setOpenCheck({ id: today });
        dayData.map((data) => data.id === today && setDayData(dayData));
      }
    }
  };

  return (
    <div className={`${styles.day} ${offDay}`} onClick={handleClick}>
      {day.format("D")}
      <ul className={`${styles.list_box} ${offDay}`}>
        {dayData.map(
          (data) =>
            data.id === day.format("YYYYMMDD") &&
            data.checkList.map((list, i) => (
              <li key={i} className={`${styles.list} ${data.checked[i] && styles.list_checked} ${offDay}`}>
                - {list}
              </li>
            ))
        )}
      </ul>
    </div>
  );
});

export default Day;
