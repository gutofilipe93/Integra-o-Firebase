var usersList = document.getElementById('usersList');
var nameInput = document.getElementById('nameInput');
var ageInput = document.getElementById('ageInput');
var addButton = document.getElementById('addButton');

addButton.addEventListener('click', function(){
    create(nameInput.value, ageInput.value);
});

function create(name, age){
    var data = {
        name : name,
        age: age
    };
    // .ref() -> define uma referencia
    //. child() -> definir qual é a coleção que vai ser inserido os dados
    return firebase.database().ref().child('users').push(data);
}


firebase.database().ref().child('users').on('value', function(collection) {
    usersList.innerHTML = '';
    collection.forEach(element => {
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(element.val().name + ': ' + element.val().age));
        usersList.appendChild(li)
    });
});
