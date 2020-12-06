import moment from "moment";

class Calendar {
  constructor(monthChange) {
    this.today = moment();
    this.today.add(monthChange, "month");
    this.startWeek = this.today.startOf("month").week();
    this.endWeek = this.today.endOf("month").week() === 1 ? 53 : this.today.clone().endOf("month").week();
    this.blankWeek = this.endWeek - this.startWeek === 4 ? this.endWeek + 1 : this.endWeek;
    console.log(this.today.format("YYYYMMDD"));

    this.calendarArr = [];
  }

  calenarLoop() {
    for (let week = this.startWeek; week <= this.blankWeek; week++) {
      this.calendarArr.push(
        Array(7)
          .fill(0)
          .map((n, i) => {
            console.log(this.today.format("YYYY-MM-D"));
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
