import React from "react";

export default function FormatDate(props) {
  const days = [
    "SUNDAY",
    "MONDAY",
    "TUESDAY",
    "WEDNESDAY",
    "THURSDAY",
    "FRIDAY",
    "SATURDAY",
  ];
  const day = days[props.date.getDay()];
  const hours = props.date.getHours();
  const minutes = props.date.getMinutes();
  return (
    <div>
      LAST UPDATED: {day} {hours}:{minutes}
    </div>
  );
}
