import React, { useState } from "react";
import NoteChecklist from "../note_checklist/note_checklist";
import WeeklynoteDay from "../weeklynote_day/weeklynote_day";
import styles from "./weeklynote.module.css";

const Weeklynote = ({ data, setOpenCheck, weekData, setWeekData }) => {
  const [areaVal, setAreaVal] = useState(data.textArr);
  const [chkListText, setChkListText] = useState(data.checkList);
  const [stat, setStat] = useState(data.checkList ? data.checkList.length : 0);
  const checkListCount = Array(stat).fill(0);
  const noteStyles = { container: styles.note_container };

  const inputAdd = () => {
    setStat(stat + 1);
  };

  const click = (e) => {
    if (e.target.id === "dim") {
      setOpenCheck({});
      data.textArr = areaVal;
    }
  };

  const currentWeekText = () => {
    const currentWeek = data.time[0].week() - data.time[0].clone().startOf("month").week();

    if (currentWeek === 1) return `${data.time[0].format("M")}월 첫째주`;
    if (currentWeek === 2) return `${data.time[0].format("M")}월 둘째주`;
    if (currentWeek === 3) return `${data.time[0].format("M")}월 셋째주`;
    if (currentWeek === 4) return `${data.time[0].format("M")}월 넷째주`;
    if (currentWeek === 5) return `${data.time[0].format("M")}월 다섯째주`;
    if (currentWeek < 0) return `${data.time[0].format("M")}월 넷째주`;
  };

  return (
    <div className={styles.container} id="dim" onClick={click}>
      <div className={styles.note}>
        <p className={styles.currentWeek}>{currentWeekText()}</p>
        <ul className={`${styles.weekly_list} clear_fix`}>
          {data.time.map((time, i) => (
            <WeeklynoteDay key={i} listId={i} time={time} areaVal={areaVal} setAreaVal={setAreaVal} weekData={weekData} setWeekData={setWeekData} />
          ))}
          <li className={styles.list_item}>
            <div className={styles.item_day}></div>
            <div className={`${styles.checklist} ${styles.content} clear_fix`}>
              {checkListCount.map((el, i) => (
                <NoteChecklist key={i} listId={i} chkListText={chkListText} setChkListText={setChkListText} data={data} noteStyles={noteStyles} />
              ))}
              <div className={styles.input_add} onClick={inputAdd}></div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Weeklynote;
