


const date = new Date()


const renderCalendar = () => {
  date.setDate(1);




  
  const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0)
    .getDate()

  const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0)
    .getDate()



  const firstDayIndex = date.getDay()

  const lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0)
    .getDay()

  const nextDay = 7 - lastDayIndex - 1


  //const prevDay  = data.getDay()

  var months = [
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
    "December"
  ];

  document.getElementById("month").innerHTML = months[date.getMonth()] //current month

  document.getElementById("dates").innerHTML = new Date().toDateString() // current date



  let allDay = "";

  

  for (let x = firstDayIndex; x > 0; x--) {
    allDay += `<div class='last'>${prevLastDay - x + 1}</div>`


  }




  for (let i = 1; i <= lastDay; i++) {
    if (i === new Date().getDate() && date.getMonth() === new Date().getMonth()) {
      allDay += `<div class='date'>${i}</div>`
    } else {
      allDay += `<div>${i}</div>`
    }
  }
 


  for (let j = 1; j <= nextDay; j++) {
    allDay += `<div class='last'>${j}</div>`
    document.getElementsByClassName("days")[0].innerHTML = allDay;


  }

  /*document.getElementsByClassName("days")[0].innerHTML = allDay;*/

}








const lastMonth = () => {
  date.setMonth(date.getMonth() - 1);
 
  renderCalendar()
};

const lastMonths =  () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
};
renderCalendar();

