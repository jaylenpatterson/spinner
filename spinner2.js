let arr = ['\r|   ', '\r/   ', '\r-   ', '\r\   ', '\r\|   ', '\r\/   ', '\r\-   ', '\r\\   ', '\r\|  '];


// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 100);
// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 500);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\   ');
// }, 700);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\|   ');
// }, 900);
// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\/   ');
// }, 1100);
// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\-   ');
// }, 1300);
// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\\   ');
// }, 1500);
// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\|  ');
// }, 1500);

let i = 0;
let interval = 80;
let spinner = function () {
  if (i < arr.length) {
     process.stdout.write(arr[i]);
     i ++;
     setTimeout(spinner, interval);
  } else {
     process.stdout.write("\n");
  }
};
spinner()