const os = require('node:os'); // It is an built-in module;
// info about current user
const user = os.userInfo();
console.log(user);
// method return the system up time in seconds

console.log('System Uptime:', os.uptime() + ' seconds');

const currentOs={
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOs);