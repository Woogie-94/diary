import React from "react";
import styles from "./day.module.css";

const Day = ({ day, toDayM, currentM }) => {
  const offDay = currentM === toDayM ? styles.on : styles.off;
  return <div className={`${styles.day} ${offDay}`}>{day}</div>;
};

export default Day;
