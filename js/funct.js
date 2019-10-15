$(document).ready(function(){
    $('button').on('click', function(){
    let  username = $('#user').val();
    let  password = $('#pass').val();
    isUserNotEmpty(username);
    isPasswordNotEmpty(password);
    });
});
function error(e){
    $(e).css('border', '2px solid red');
    $('.alert-danger').fadeIn(3000);
}
function success(s){
    $(s).css('border', '2px solid teal');
    $('.alert-danger').fadeIn(3000);
}

function isUserNotEmpty(user){
    if(user == "" || user.length <= 2){
        error("#user");
        $('.alert-success').fadeOut(3000);
     }else{
      success('#user');
      $('.alert-danger').fadeOut(3000);
     }
}
function isPasswordNotEmpty(pass){
    if(pass == "" || pass.length <= 2){
        error("#pass");
        $('.alert-success').fadeOut(3000);
    }else{
         success('#pass');
         $('.alert-danger').fadeOut(3000);
    }
}
