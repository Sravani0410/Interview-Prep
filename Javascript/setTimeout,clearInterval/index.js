function countdownTimer(seconds) {
    let remainingSeconds = seconds;
  
    const intervalId = setInterval(() => {
      console.log(remainingSeconds);
      remainingSeconds--;
  
      if (remainingSeconds < 0) {
        clearInterval(intervalId);
        console.log("Countdown complete!");
      }
    }, 1000);
  }
  
  countdownTimer(5);

//   In this example, the countdownTimer function uses closure to maintain the remainingSeconds variable, which is accessed by the inner function passed to setInterval. The setInterval function executes the inner function every second, decrementing remainingSeconds until it reaches 0. Once the countdown is complete, the clearInterval function is called to stop the execution of the inner function. This demonstrates how closure can be combined with setInterval and clearInterval to create a countdown timer.