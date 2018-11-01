//Avoiding use global variables
const appCountDown = function () {
    let time = 300; // time to countdown
// timer that execute the function counterDown every 1000 milliseconds(1 second)
    const interval = setInterval(counterDown, 1000);

    /*
    Function that shows every second how many time reminds for time arrives to zero
    * */
    function counterDown() {
        if (time >= 0) {
            let minutes = Math.floor(time / 60);
            let seconds = time % 60;
            minutes = minutes < 10 ? `0${minutes}` : minutes;
            seconds = seconds < 10 ? `0${seconds}` : seconds;
            console.log(`${minutes}:${seconds}`);
            time--;
        } else {
            clearInterval(interval); // Stop the interval that is running over this function
        }
    }
}
appCountDown();

