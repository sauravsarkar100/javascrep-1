$("h2").text("Game start");


var count =0;
$(".box").click(function(){
    count = count+1;
    $(this).text(count);
    if(count%2==0){
        $(this).text(0);
    }
    else{
        $(this).text("x");
    }

})