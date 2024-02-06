/// FUNÇÃO MUDAR COR
var body = document.body; 
var isBlue = false;

 
  function changeColor() {
    if (isBlue){
        body.style.color = "black";
        body.style.background = "#EBF2FA";
        body.style.transition = "background-color 1s";
        isBlue=false;
    }
    else { 
        body.style.transition = "background-color 1s";
        body.style.background = "#172A3A";
        body.style.color= "aliceblue";
        isBlue=true;

    }

 }
 
// FUNÇÃO TASKLIST

var tasklist = document.getElementsById('tasklist'); //faz a variavel receber o campo onde ficarão as tarefas
var taskinput = document.getElementsByClassName('dgt-tarefa'); //faz a variavel receber o campo de "digite sua tarefa..."

function addtarefa () {
  var tasktext = taskinput.Value.trim ();
  if (tasktext !== ""){
    var li = document.createElement("li");
    li.innerHTML = `
    <span>${tasktext}</span>
    <button class ="btnEdit" onclick="edittask(this)> Editar</button>
    <button class ="btnDelete" onclick="deletetask(this)> Remover</button>
    `;
    tasklist.appendChild(li);
    taskinput.value = "";
  }
}