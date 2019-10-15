$(document).ready(function(){
    $('button').on('click', function(){
    let  username = $('#user').val();
    let  password = $('#pass').val();
    if(username == ""){
          error("#user");
       }else{
        success('#user');
       }
    if(password == ""){
           error("#pass")
       }else{
            success('#pass')
       }
    });
});
function error(e){
    $(e).css('border', '2px solid red');
}
function success(s){
    $(s).css('border', '2px solid red');
}