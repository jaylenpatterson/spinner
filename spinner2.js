let arr = ['\r|   ', '\r/   ', '\r-   ', '\r\   ', '\r\|   ', '\r\/   ', '\r\-   ', '\r\\   ', '\r\|  '];
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