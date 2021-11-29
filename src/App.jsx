import React, { useEffect, useState } from "react";
import CalendarJs from "./service/calendar";
import Calendar from "./component/calendar/calendar";
import styles from "./App.module.css";
import Daleynote from "./component/daleynote/daleynote";
import Weeklynote from "./component/weeklynote/weeklynote";

const App = (props) => {
  const [monthChange, setMonthChange] = useState(0);
  const [dayData, setDayData] = useState([]);
  const [weekData, setWeekData] = useState([]);
  const [openCheck, setOpenCheck] = useState();

  const calendarJs = new CalendarJs(monthChange);
  calendarJs.calenarLoop();
  console.log(calendarJs.calendarArr);

  useEffect(() => {
    console.log(weekData);
    console.log(dayData);
    console.log(openCheck);
  }, [weekData, openCheck, dayData]);

  const monthChangeFn = (e) => {
    const pointer = document.getElementById("pointer");
    const targetId = e.target.id;

    if (targetId === "prev") {
      setMonthChange(monthChange - 1);
      pointer.innerHTML = `${calendarJs.today.clone().add(-2, "month").format("M")}월`;
    }
    if (targetId === "next") {
      setMonthChange(monthChange + 1);
      pointer.innerHTML = `${calendarJs.today.clone().add(2, "month").format("M")}월`;
    }
  };

  const monthChangePointer = (e) => {
    const pointer = document.getElementById("pointer");
    const targetId = e.target.id;

    if (e.type === "mousemove") {
      pointer.style.display = `block`;
      pointer.style.left = `${e.clientX}px`;
      pointer.style.top = `${e.clientY}px`;

      if (targetId === "prev") pointer.innerHTML = `${calendarJs.today.clone().add(-1, "month").format("M")}월`;
      if (targetId === "next") pointer.innerHTML = `${calendarJs.today.clone().add(1, "month").format("M")}월`;
    } else pointer.style.display = `none`;
  };
  // test.map((el) => (el.id === calendarJs.today.format("YYYYMMDD") ? el.tag : save()))
  return (
    <div>
      <div id="pointer" className={styles.pointer}></div>
      <div className={styles.calendarBtn} onClick={monthChangeFn}>
        <button className={styles.prevBtn} id="prev" onMouseMove={monthChangePointer} onMouseOut={monthChangePointer}></button>
        <button className={styles.nextBtn} id="next" onMouseMove={monthChangePointer} onMouseOut={monthChangePointer}></button>
      </div>
      <Calendar calendarData={calendarJs} dayData={dayData} setDayData={setDayData} weekData={weekData} setWeekData={setWeekData} setOpenCheck={setOpenCheck} />
      {dayData.map((data) => data.id === openCheck.id && <Daleynote key={openCheck.id} data={data} setOpenCheck={setOpenCheck} dayData={dayData} setDayData={setDayData} />)}
      {weekData.map((data) => data.id === openCheck.id && <Weeklynote key={openCheck.id} data={data} setOpenCheck={setOpenCheck} weekData={weekData} setWeekData={setWeekData} />)}
    </div>
  );
};

export default App;
