$(document).ready(function(){
    var res = "";
    if(userIsLogin()){
        res+="<div class='form-group'><button id='sendButton' type='button' class='btn btn-default'>&#8658;</button>" +
            "<input type='text' class='form-control' id='message' placeholder='Your text'></div>";
    } else{
        res+= "<button id='loginButton' type='button' class='btn btn-default'>Ok</button>";
        res+="<div class='input-group'>" +
            "    <span class='input-group-addon'><i class='glyphicon glyphicon-user'></i></span>" +
            "    <input id='login' type='text' class='form-control' name='login' placeholder='Login'>" +
            "    <span class='input-group-addon'><i class='glyphicon glyphicon-lock'></i></span>" +
            "    <input id='password' type='password' class='form-control' name='password' placeholder='Password'></div>";


    }
    $("#mainLowPart").html(res);

});
function userIsLogin() {
    return true;
}