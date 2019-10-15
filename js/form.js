$(document).ready(function(){
    $('button').on('click', function(){
    let  username = $('#user').val();
    let  password = $('#pass').val();
    if(username == ""){
           $('#user').css('border', '2px solid red');
       }else{
        $('#user').css('border', '2px solid green');
       }
    if(password == ""){
           $('#pass').css('border', '2px solid red');
       }else{
        $('#pass').css('border', '2px solid green');
       }
    });
});