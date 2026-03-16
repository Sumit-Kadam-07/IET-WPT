// function addition(a, b){
//     return a + b;
// }

// function subtraction(a, b){
//     return a - b;
// }

// function multiplication(a , b){
//     return a * b;
// }

// function division(a, b){
//     return a / b;
// }

// function result(a1, a2, callback){
//     let res = callback(a1, a2);
//     console.log("Result", res)
// }

// result(10, 5, addition);
// result(10, 5, subtraction);
// result(10, 5, multiplication);
// result(10, 5, division);

function addition(a, b, callback){
    let res = a + b;
    callback(null, res);
}

function subtraction(a, b, callback){
    let res = a - b;
    callback(null, res);
}

function multiplication(a, b, callback){

    if(a && b === 0){
        callback("Error:parameter cannot be zero in multiplication", null);
    }
    else{
        let res = a * b;
        callback(null, res);
    }

}

function division(a, b, callback){

    if(b === 0){
        callback("Error: Division by zero not allowed", null);
    }
    else{
        let res = a / b;
        callback(null, res);
    }

}

function result(error, result){

    if(error){
        console.log(error);
    }
    else{
        console.log("Result:", result);
    }

}


addition(10,5,result);
subtraction(10,5,result);
multiplication(10,0,result);
division(10,0,result);
multiplication(10,5,result);
division(10,5,result);

