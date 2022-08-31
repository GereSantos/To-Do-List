function showDate(){
    var data = new Date();

    var dia = String(data.getDate()).padStart(2, '0');
    
    var mes = String(data.getMonth() + 1).padStart(2, '0');
    
    var ano = data.getFullYear();
    
    dataAtual = dia + '/' + mes + '/' + ano;
    
    
    document.getElementById('screendata').innerHTML = `<h3> Data de hoje: ${dataAtual} </h3>` ;
}

showDate() 

var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Evento aonde ocorre o fechamento ou remoção de uma tarefa da lista
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Evento aonde ocorre a marcação de check quando atividade é concluída
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Evento aonde ocorre a adição de uma nova tarefa na lista
function addList() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("O campo está vazio, Insira o que deseja fazer.");
  } else {
    document.getElementById("myList").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}