import moment from "moment";

class Calendar {
  constructor(monthChange) {
    this.today = moment();
    console.log(this.today.add());
    this.today.add(monthChange, "month");
    this.startWeek = this.today.clone().startOf("month").week();
    this.endWeek = this.today.clone().endOf("month").week() === 1 ? 53 : this.today.clone().endOf("month").week();
    this.blankWeek = this.endWeek - this.startWeek === 4 ? this.endWeek + 1 : this.endWeek;
    this.calendarArr = [];
    this.test = document.getElementById("pointer");
  }

  calenarLoop() {
    for (let week = this.startWeek; week <= this.blankWeek; week++) {
      this.calendarArr.push(
        Array(7)
          .fill(0)
          .map((n, i) => {
            this.current = this.today
              .clone()
              .week(week)
              .startOf("week")
              .add(n + i, "day");

            return this.current;
          })
      );
    }
  }
}

export default Calendar;
