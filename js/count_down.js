//*The Final match date
let countDownDate = new Date("Dec 18,2022 16:00:00").getTime();
console.log(countDownDate);
let counter = setInterval(() => {
  //*Get Date now
  let dateNow = new Date().getTime();

  //*Find the date diffrent bettwen now and countdown date
  let dateDiff = countDownDate - dateNow;

  //*get Time unites
  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);
  document.querySelector(".day-numbers").innerHTML = days;
  document.querySelector(".hour-numbers").innerHTML = hours;
  document.querySelector(".minute-numbers").innerHTML = minutes;
  document.querySelector(".sec-numbers").innerHTML = seconds;
  if (dateDiff < 0) {
    clearInterval(counter);
  }
}, 1000);
