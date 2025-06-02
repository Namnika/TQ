
const outputList = document.getElementById("output-list")
const addButton = document.getElementById("add")
const url = "https://jsonplaceholder.typicode.com/posts"


// post data
const handlePost = () => {

    axios.post(url, {
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            userId: 1,
            title: "New title Created",
            body: "New Body Created",
        })
    })
        .then((data) => console.log("Created Data: " + data))
        .catch((err) => console.log(err))
}


addButton.addEventListener("click", handlePost)

// update data

const handlePut = (id) => {

    axios.put(`${url}/${id}`, {
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            id: id,
            userId: 1,
            title: "Update Title",
            body: "Update Body",
        })
    })
        .then((data) => console.log("Updated Data: " + data))
        .catch((err) => console.log(err))
}
// delete data

const handleDelete = (id) => {

    axios.delete(`${url}/${id}`)
        .then((data) => console.log("Deleted Data: " + data))
        .catch((err) => console.log(err))
}

// Get data

const handleFetch = () => {

    axios.get(url)
        .then((res) => {
            // console.log(data);
            // process data array
            const data = res.data;

            for (let i = 0; i < data.length - 90; i++) {
                console.log(data[i]);
                const li = document.createElement("li")
                const title = document.createElement("h3")
                const body = document.createElement("p")
                title.textContent = data[i].title
                body.textContent = data[i].body
                outputList.appendChild(li)
                li.appendChild(title)
                li.appendChild(body)
                const editButton = document.createElement("button")
                editButton.type = "button"
                editButton.textContent = "edit (PUT)"
                outputList.append(editButton)

                editButton.addEventListener("click", () => handlePut(data[i].id)) // clicking button to edit

                const deleteButton = document.createElement("button")
                deleteButton.type = "button"
                deleteButton.textContent = "delete (DELETE)"
                outputList.append(deleteButton)

                deleteButton.addEventListener("click", () => handleDelete(data[i].id)) // clicking button to delete


            }

        })
        .catch((err) => console.log(err))
}

handleFetch()


