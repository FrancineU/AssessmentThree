$(document).ready(function(){
    $(".card-title").hover(function(){

        $("img").show();
    });
    $("img").hover(function(){
        $(".card-title")
    });
});