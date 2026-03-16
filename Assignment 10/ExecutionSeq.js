function normalFunction(){
    console.log("1. Normal Function Executed");
}

console.log("Start of Program");

normalFunction();

setTimeout(() => {
    console.log("4. setTimeout Executed");
}, 1000);

let p = new Promise((resolve, reject) => {
    console.log("2. Inside Promise");
    resolve();
});

p.then(() => {
    console.log("3. Promise Resolved");
});

console.log("End of Program");