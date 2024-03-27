let dateInput = document.getElementById("dateInput");
//make the future days unclickable
dateInput.max = new Date().toISOString().split("T")[0];

let years = document.getElementById("years");
let months = document.getElementById("months");
let days = document.getElementById("days");



function calcAge(){
    let birthDate = new Date(dateInput.value);

    let d1 = birthDate.getDate();
    let m1 = birthDate.getMonth() + 1;
    let y1 = birthDate.getFullYear();



    let today = new Date();

    let d2 = today.getDate();
    let m2 = today.getMonth() + 1;
    let y2 = today.getFullYear();


    let d3, m3, y3;

    // years diff
    y3 = y2 - y1;

    // months diff
    if(m2 >= m1){
        m3 = m2 - m1;
    }else{
        y3--;
        m3 = 12 + m2 - m1;
    }

    // days diff
    if(d2 >= d1){
        d3 = d2 - d1;
    }else{
        m3--;
        d3 = daysInMonth(y1, m1) + d2 - d1;
    }
    // if the months is (-) value
    if(m3 < 0){
        m3 = 11;
        y--;
    }

    years.innerHTML = y3;
    months.innerHTML = m3 ;
    days.innerHTML = d3;


}

function daysInMonth(y, m){
    return new Date(y, m, 0).getDate();
}