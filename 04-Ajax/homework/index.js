var URL = 'http://localhost:5000/amigos';

//id = boton --> Ver amigos

let showFriends = function(){
    $('#lista').empty();
    $.get(`${URL}`, function(friends){  //friends es la respuesta del servidor que la trae el json --> function(data){}
        console.log(friends);
        friends.forEach(e => {
            let li = document.createElement('li');
            li.id = e.id;
            li.innerText = e.name;
            let list  = document.getElementById('lista');
            list.appendChild(li);

            //$('#lista').append(`<li id="${e.id}"> ${e.name} X </li>`)
        });
    })
};

$('#boton').click(showFriends);

//Boton buscar amigos

$('#search').click(function(){
    let id = $('#input').val();
    if(id){
        //get (http://localhost:5000/amigos/id)
        $.get(`${URL}/${id}`, function(friend) {
            $('#amigo').text(`El nombre de mi amigo es: ${friend.name} ${friend.age} ${friend.email}`);
            $('#input').val("");
        })
    } else {
        $('#amigo').text('Tenes que ingresar un ID')
    }
});

//Boton borrar amigos

let deleteFriend = function(){
    let id = $('#inputDelete').val();
    let friend;

    if(id){
        $.get(`${URL}/${id}`, function(f){
            friend = f;
        })
        //Utilizo ajax que recibe tres parametros
        $.ajax({
            url: `${URL}/${id}`,
            type: "DELETE",
            success: function(){
                $('#success').text(`Tu amigo, ${friend.name} fue eliminado correctamente`);
                $('#inputDelete').val("");
                showFriends();  //refrescar la lista
            }
        })
    }else{

    }
}
$('#delete').click(deleteFriend);