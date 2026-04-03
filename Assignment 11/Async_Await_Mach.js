function fetchData(){

    return new Promise((resolve) => {

        setTimeout(() => {
            resolve("Data received from server")
        }, 2000)

    })

}

async function displayData(){

    console.log("Fetching data...")

    let result = await fetchData()

    console.log(result)

    console.log("Program finished")

}

displayData()