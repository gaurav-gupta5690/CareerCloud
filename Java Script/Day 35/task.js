const Marks = [87, 93, 67, 99, 55, 93, 98];

document.getElementById("aa").innerHTML = Marks.filter(checkAdult);

function checkAdult(Mark) {
  return Mark >= 90;
}