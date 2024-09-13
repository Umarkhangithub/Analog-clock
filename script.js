let hrEle = document.querySelector('.hr');
let minEle = document.querySelector('.min');
let secEle = document.querySelector('.sec');


setInterval(() => {
    let date = new Date();

    hr = date.getHours()*30;
    min = date.getMinutes()*6;
    sec = date.getSeconds()*6;

    hrEle.style.transform = `rotate(${(hr) + min/12 }deg)`;
    minEle.style.transform = `rotate(${min}deg)`;
    secEle.style.transform = `rotate(${sec}deg)`;


})