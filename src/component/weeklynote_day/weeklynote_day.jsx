import React, { useState, memo, useEffect, useRef } from "react";
import styles from "./weeklynote_day.module.css";

const WeeklynoteDay = memo(({ time, listId, areaVal}) => {
  const areaRef = useRef();
  const currentAreaText = areaVal[listId] !== undefined ? areaVal[listId] : "";
  const [val, setVal] = useState(currentAreaText || "");
  


  useEffect(() => {
    areaRef.current.addEventListener("focusout", () => {
      if (areaRef.current.value !== "") areaVal[listId] = areaRef.current.value;
    });
  }, []);

  const areaValue = (e) => {
    setVal(e.target.value);
  };

  return (
    <li className={styles.list_item}>
      <div className={styles.item_day}>
        <div className={styles.item_day_text_box}>
          <p>{time.format("D")}</p>
          <p>{time.format("ddd")}</p>
        </div>
      </div>
      <div className={styles.area_box}>
        <textarea ref={areaRef} className={styles.notearea} value={val} onChange={areaValue}></textarea>
      </div>
    </li>
  );
});

export default WeeklynoteDay;
