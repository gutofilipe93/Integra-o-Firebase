var uploader = document.getElementById('uploader');
var fileButton = document.getElementById('fileButton');



fileButton.addEventListener('change', function(e){

    //Obter o arquivo
    var file = e.target.files[0];

    //Referencia do Storage
    var storageRef = firebase.storage().ref('arquivos/' + file.name);

    //Enviar o arquivo
    var task = storageRef.put(file);

    task.on('state_changed', function(snapshot){
        var percentage = (snapshot.b / snapshot.h) * 100;        
        uploader.value = Math.trunc(percentage);
    },
    function error(error){
        console.log(error);
    },
    function complete(){
        alert('Envio Completo');
    }
    )
});