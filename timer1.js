// Note for M1 macs beep does not working in VSCode terminal. Use main terminal

const args = process.argv.slice(2);

const timer = {
  timers: args
    .map((arg) => {
      const alarmTime = Number(arg);
      if (isNaN(alarmTime) || alarmTime < 0) {
        return null;
      }
      return alarmTime;
    })
    .filter((duration) => duration !== null)
    .sort((a, b) => a - b),
  
  playSound: function() {
    process.stdout.write("\x07");
  },
  
  setAlarm: function(duration) {
    setTimeout(() => {
      this.playSound();
    }, duration * 1000);
  },
  
  start: function() {
    for (const alarmTimer of this.timers) {
      this.setAlarm(alarmTimer);
    }
  }
};

timer.start();
