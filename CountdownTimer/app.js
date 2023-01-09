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

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll('.deadline-format');

let futureDate = new Date(2026,5,8,12);

giveaway.textContent = 
`The World Cup begins on ${weekdays[futureDate.getDay()]}, ${months[futureDate.getMonth()]} ${futureDate.getDate()}, ${futureDate.getFullYear()}`;

const futureTime = futureDate.getTime();

function getRemainingTime(){
  const today = new Date().getTime();
  const x = futureTime - today;
  
  const oneD = 24*60*60*1000;
  const oneH = 60*60*1000;
  const oneM = 60*1000;
  const oneS = 1000;

  let days=Math.floor(x/oneD);
  let hours=Math.floor((x%oneD)/oneH);
  let mins=Math.floor((x%oneH)/oneM);
  let secs=Math.floor((x%oneM)/oneS);
  const values = [days, hours, mins, secs];

  items.forEach((e, i)=>{
    if(values[i]<10){
      values[i]=`0${values[i]}`;
    }
    e.querySelector('h4').textContent=values[i];
  })
}

let countdown = setInterval(getRemainingTime,1000);
getRemainingTime();
