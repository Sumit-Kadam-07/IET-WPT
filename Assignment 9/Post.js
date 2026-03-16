function sendData(){

    let title = document.getElementById("title").value 

    let data = {
        title:"title",
        completed: false,
        id: 101
    }

    fetch("https://jsonplaceholder.typicode.com/todos", {
       method: "POST",
       headers: {
        "content-Type": "application/json"
       },
       body: JSON.stringify(data)
    })
    .then(responce => responce.json())
    .then(result => {
        console.log("Data Posted Successfully")
        console.log(result)
    })
    .catch(error => {

        console.log("erroe",error)
    })
}