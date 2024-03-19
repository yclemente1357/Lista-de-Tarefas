function addNewTask(){
    var list = document.getElementById("list");
    var text = document.getElementById("task_name").value;

    if(text.length === 0){
        alert('Tarefa precisa de ter mais de 1 caracter');
        return; 
    }
    var listItem = document.createElement("li");
    listItem.className = "list-item"
    

    const textElement = document.createTextNode(text)
    
    list.appendChild(listItem)
    listItem.appendChild(textElement)

    // Deixando o input vazio após inserir tarefa
    document.getElementById("task_name").value = '';

}


// Limpando a lista por completo
function clearList() {
    var list = document.getElementById("list");
    list.innerHTML = '';
}

// Configurando o campo do dia 
document.addEventListener("DOMContentLoaded", function() {
    var data = new Date();
    document.getElementById("dia").innerHTML = data.getDate();
    document.getElementById("mes").innerHTML = data.getMonth() + 1;

});