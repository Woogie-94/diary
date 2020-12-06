const calendar = document.getElementById("cal");
let paintingControl = false;
calendar.addEventListener("mousedown", (e) => {
  paintingControl = !paintingControl;
  console.log(e);
});

calendar.addEventListener("mousemove", (e) => {
  if (paintingControl) console.log(e);
});

calendar.addEventListener("mouseup", (e) => {
  paintingControl = !paintingControl;
  console.log("end");
});
