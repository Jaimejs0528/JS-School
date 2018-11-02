// Avoiding use global variables
const appCountDown = function main() {
  let time = 300; // time to countdown
  let interval;
  // timer that execute the function counterDown every 1000 milliseconds(1 second)
  /*
    Function that shows every second how many time reminds for time arrives to zero
    * */
  function counterDown() {
    if (time >= 0) {
      let minutes = Math.floor(time / 60);
      let seconds = time % 60;
      minutes = minutes < 10 ? `0${minutes}` : minutes;
      seconds = seconds < 10 ? `0${seconds}` : seconds;
      // eslint-disable-next-line no-console
      console.log(`${minutes}:${seconds}`);
      time -= 1;
    } else {
      clearInterval(interval); // Stop the interval that is running over this function
    }
  }
  interval = setInterval(counterDown, 1000);
};
appCountDown();
