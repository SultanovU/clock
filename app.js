function time() {
    let clock = document.querySelector('.clock')
    let data = new Date()
    let hr = data.getHours()
    let min = data.getMinutes()
    let sec = data.getSeconds()
    clock.textContent=`${hr}:${min}:${sec}`

}
setInterval(time, 1000);   