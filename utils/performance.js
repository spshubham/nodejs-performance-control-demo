const _ = require("lodash");

let debounceCount = 0;
let throttleCount = 0;

// Heavy task simulator
const heavyTask = (type, count) => {
  console.log(
    `✅ ${type} Executed | Count: ${count} | Time: ${new Date().toLocaleTimeString()}`
  );
};


// 🔹 Debounce → Executes AFTER user stops calling
const debouncedTask = _.debounce(() => {
  debounceCount++;
  heavyTask("DEBOUNCE", debounceCount);
}, 2000);


// 🔹 Throttle → Executes every interval while calls continue
const throttledTask = _.throttle(() => {
  throttleCount++;
  heavyTask("THROTTLE", throttleCount);
}, 2000);


module.exports = {
  debouncedTask,
  throttledTask,
};
