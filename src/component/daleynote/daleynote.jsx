import React, { useRef, useState } from "react";
import DaleynoteChecklist from "../daleynote_checklist/daleynote_checklist";
import styles from "./daleynote.module.css";

const Daleynote = ({ data, setOpenCheck, dayData, setDayData }) => {
  const [chkListText, setChkListText] = useState(data.checkList);
  const [stat, setStat] = useState(data.checkList ? data.checkList.length : 0);
  const [freeNoteVal, setFreeNoteVal] = useState(data.freenote || "");
  const checkListCount = Array(stat).fill(0);
  const areaRef = useRef();

  const inputAdd = () => {
    setStat(stat + 1);
  };

  const click = (e) => {
    if (e.target.id === "dim") {
      setOpenCheck({});
      data.checkList = chkListText;
      data.freenote = areaRef.current.value;
    }
  };

  const freeNoteArea = (e) => {
    setFreeNoteVal(e.target.value);
  };

  return (
    <div className={styles.container} id="dim" onClick={click}>
      <div className={styles.note}>
        <p>
          {data.time.format("MM")}
          <span>월 </span>
          {data.time.format("DD")}
          <span>일 </span>
        </p>
        <div>
          <div className={`${styles.checklist} ${styles.content}`}>
            {checkListCount.map((el, i) => (
              <DaleynoteChecklist key={i} listId={i} chkListText={chkListText} setChkListText={setChkListText} data={data} />
            ))}
            <div className={styles.input_add} onClick={inputAdd}></div>
          </div>
        </div>
        <div>
          <div className={`${styles.freenote} ${styles.content}`}>
            <textarea ref={areaRef} className={styles.notearea} value={freeNoteVal} onChange={freeNoteArea}></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Daleynote;
