//we need days,hours,miniutes and seconds jan 1 00:00 is target

let cDay;
let cHour;
let cMin;
let cSec;
let cMonth;
let daysLeft;
let cYear;
let daysinFeb;


var interval = window.setInterval(function(){

  var cDate = new Date()
  cHour =cDate.getHours();
  cMin = cDate.getMinutes();
  cSec = cDate.getSeconds();
  cDay = cDate.getDate();
  cMonth = cDate.getMonth() +1 ;
  cYear = cDate.getFullYear();



  if (cYear % 4 == 0){
    daysPerYear = 366;
    daysinFeb = 29
  }else{
    daysPerYear = 365;
    daysinFeb = 28
  }
  


  switch (cMonth){
    case 1:
        daysLeft = daysPerYear;
        break;

    case 2:
        daysLeft = daysPerYear - 31 //first month 334
        break;

    case 3:
        daysLeft = daysPerYear - (31 + daysinFeb); //306 //second month FEb  275
        break;

    case 4:
        daysLeft = daysPerYear - (62 + daysinFeb); //march third month  186
        break;

    case 5:
        daysLeft = daysPerYear - (92 + daysinFeb); //april fourth month 66
        break;


    case 6:
        daysLeft = daysPerYear - (123 + daysinFeb); //may fifth month 
        break;


    case 7:
        daysLeft = daysPerYear - (153 + daysinFeb); //june sixxth mont
        break;

    case 8:
        daysLeft = daysPerYear - (184 + daysinFeb); //july 7
        break;

    case 9:
        daysLeft = daysPerYear - (215 + daysinFeb); //august 8
        break;

    case 10:
        daysLeft = daysPerYear - (245+ daysinFeb); //spe 9
        break;


    case 11:
        daysLeft = daysPerYear - (276 + daysinFeb); //oct 10
        break;

    case 12:
        daysLeft = daysPerYear - (306 + daysinFeb); //nov 11 ---.335 .  366
        break;
          
  }

  document.getElementById('seconds').innerHTML = 60 -cSec;
  document.getElementById('miniutes').innerHTML = 60 -cMin;
  document.getElementById('hours').innerHTML = 24 -cHour;
  document.getElementById('days').innerHTML = daysLeft - cDay;
///
  


}, 1000)

