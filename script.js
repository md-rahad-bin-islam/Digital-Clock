function updateTime(){

    const dateObject = new Date();
    let h = dateObject.getHours();
    let m = dateObject.getMinutes();
    let s = dateObject.getSeconds();

    const amPm = h >= 12? 'PM' : 'AM';
    h = h % 12 || 12 ;
    h = h < 10 ? '0'+h : h;
    m = m < 10 ? '0'+m : m;
    s = s < 10 ? '0'+s : s;

    const time = `${h} : ${m} : ${s} ${amPm}`;

    document.querySelector('.displayTime').innerHTML = time;
}
setInterval(updateTime, 1000);

function updateDate(){
    const dateObject = new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
  
    const day = days[dateObject.getDay()];
    const date = dateObject.getDate();
    const month = months[dateObject.getMonth()];
    const year = dateObject.getFullYear();
  
    return `${day}, ${date}, ${month}, ${year}`;
}
document.querySelector(".displayDate").innerHTML = updateDate();