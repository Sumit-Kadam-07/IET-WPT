function cal(){
    let a = '12345678as'
    let sum = 0;
    for(let i = 0; i < a.length; i++){

        if(!isNaN(a[i])){

            sum += Number(a[i]);
        }
    }
    console.log("Sum of No is: ", + sum)
    console.log(`um of ${a} is ${sum}`)
}
cal();
module.exports = cal;
