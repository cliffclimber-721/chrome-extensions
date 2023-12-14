function listUp(e) {
    const todo = document.getElementById("txt");
    const code = e.code;

    if(code == "Enter") {
        console.log(todo.innerText);
    }
}