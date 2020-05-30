const timeElem = document.querySelector("#time");
const dateElem = document.querySelector("#date");

const setTime = () => {
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    if (hour > 20 && hour < 8) {
        document.documentElement.setAttribute("data-theme", "dark");
    } else {
        document.documentElement.setAttribute("data-theme", "light");
    }

    hour = hour < 10 ? "0" + hour : hour;
    minute = minute < 10 ? "0" + minute : minute;
    second = second < 10 ? "0" + second : second;

    let daysArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let monthsArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let day = daysArray[date.getDay()]
    let dayNum = date.getDate()
    let month = monthsArray[date.getMonth()]
    let year = date.getFullYear()

    let fullTime = `${hour}.${minute}.${second}`;
    let fullDate = `${day}, ${dayNum} ${month} ${year}`;

    timeElem.innerText = fullTime;
    dateElem.innerText = fullDate;

    setInterval(setTime, 1000);
}

setTime()