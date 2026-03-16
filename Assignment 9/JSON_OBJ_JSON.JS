let student = {

    id:101,
    name:"ABC",
    course:"XYZ"
}

let jsonData = JSON.stringify(student)
console.log("JSON Formate", jsonData)

let objData = JSON.parse(jsonData)
console.log("OBJ Formate:", objData)