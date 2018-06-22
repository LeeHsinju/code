var topic = [
    "愛在黎明破曉時",
    "花樣年華",
    "Special Event! <週末夜派對>",
    "七月與安生",
    "愛在午夜希臘時"

];

var startDate = new Date();

function setMonthAndDay(startMonth, startDay)
{
    startDate.setMonth(startMonth-1);
    startDate.setDate(startDay);
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
}

setMonthAndDay(6,23);
