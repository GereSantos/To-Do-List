function showDate(){
    var data = new Date();

    var dia = String(data.getDate()).padStart(2, '0');
    
    var mes = String(data.getMonth() + 1).padStart(2, '0');
    
    var ano = data.getFullYear();
    
    dataAtual = dia + '/' + mes + '/' + ano;
    
    
    document.getElementById('screendata').innerHTML = `<h3> Data de hoje: ${dataAtual} </h3>` ;
}

showDate() 