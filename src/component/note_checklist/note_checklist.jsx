import React, { useEffect, useRef, useState } from "react";
import styles from "./note_checklist.module.css";

const DaleynoteChecklist = ({ listId, chkListText, data, noteStyles }) => {
  const inputRef = useRef();
  const currentCheckList = data.checkList !== undefined ? data.checkList[listId] : "";
  const [val, setVal] = useState(currentCheckList || "");

  useEffect(() => {
    inputRef.current.addEventListener("focusout", (e) => {
      if (inputRef.current.value !== "") chkListText[listId] = inputRef.current.value;
    });
  }, []);

  const inputChange = (e) => {
    setVal(e.target.value);
  };

  const cheked = (e) => {
    data.checked[listId] = !data.checked[listId];
    data.checked[listId] ? e.target.classList.add(styles.checked) : e.target.classList.remove(styles.checked);
  };

  return (
    <div className={noteStyles.container}>
      <button className={`${styles.check} ${data.checked[listId] && styles.checked} ${noteStyles.check}`} onClick={cheked} />
      <input ref={inputRef} type="text" className={`${styles.input} ${noteStyles.input}`} value={val} onChange={inputChange} />
    </div>
  );
};

export default DaleynoteChecklist;
