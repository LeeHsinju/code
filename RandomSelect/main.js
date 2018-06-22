$(document).ready(function() {
    $("input").click(function()//$表要尋找()中的東西
    {
        //alert("Hi");
        var numberOfListItem = $("#choices li").length;
        var randomChildNumber = Math.floor(Math.random()*numberOfListItem);
        
         $("H1").text($("#choices li").eq(randomChildNumber).text());//表示(H1)會去搜尋(li)裡的東西，並且是以隨機來搜璇並呈現的
    });
});