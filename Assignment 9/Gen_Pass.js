function generate(length){

    let data = "QWERTYUIOPASDFGHJKLZXCVBNMzxcvbnmasdfghjklqwertyuiop1234567890`,./;'~!@#$%^&*()_+-="

    let pass = "";

    for( let i = 0; i < length; i++){

        let pos = Math.floor(Math.random() * data.length);

        pass += data[pos];
    }
console.log(pass);
}
generate(6);
generate(12);