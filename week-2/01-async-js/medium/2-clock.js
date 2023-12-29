function getCurrentTime() {
    let now = new Date();
    let hours = now.getHours().toString().padStart(2, '0');
    let minutes = now.getMinutes().toString().padStart(2, '0');
    let seconds = now.getSeconds().toString().padStart(2, '0');

    return {
        hours,
        minutes,
        seconds,
        ampm: hours < 12 ? 'AM' : 'PM'
    };
}
function formatTime(time, showAMPM) {
    let { hours, minutes, seconds, ampm } = time;

    if(showAMPM && hours >= 12){
       hours = hours - 12;
    }
    return `${hours}:${minutes}:${seconds}${showAMPM ? ` ${ampm}` : ''}`;
}
function delay(){

    return new Promise(resolve =>{

        let intervalId = setInterval(() =>{
            resolve();
            clearInterval(intervalId)
            
        }, 1000);
    });

}

async function main(){

    for(let i=0;i<10;i++){
        await delay();
        const currentTime = getCurrentTime();
        const time24Format = formatTime(currentTime, false);
        const time12Format = formatTime(currentTime, true);
        console.log(time24Format + " " + time12Format);
    }
}
main();