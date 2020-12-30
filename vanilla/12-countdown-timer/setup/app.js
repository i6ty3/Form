const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');


let tDate = new Date();
const tyear = tDate.getFullYear();
const tmonth = tDate.getMonth();
const tday = tDate.getDate();

let futureDate = new Date(tyear,tmonth,tday + 1,0,0,20);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

let month = months[futureDate.getMonth()];
const date = futureDate.getDate();
let day = weekdays[futureDate.getDay()];

giveaway.textContent = `giveaway ends on ${year}, ${date} ${month}, ${hours}:${minutes}am, ${day}`;


// ---------------------

const futureTime = futureDate.getTime();
function getRemainingTime(){
  const today = new Date().getTime();
  const t = futureTime -today;

  const oneDay = 24*60*60*1000;
  const oneHour = 60*60*1000;
  const oneMinute = 60*1000;

  let days = Math.floor(t/ oneDay);
  let hour = Math.floor((t%oneDay)/ oneHour);
  let minute = Math.floor((t%oneHour)/ oneMinute);
  let seconds = Math.floor((t%oneMinute)/1000);

  const values = [days,hours,minutes,seconds];

  items.forEach(function(item,index){
    item.innerHTML=values[index];
  });
  if(t<0){
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">sorry, expired</h4>`
  }
};
let countdown = setInterval(getRemainingTime,1000);
getRemainingTime();