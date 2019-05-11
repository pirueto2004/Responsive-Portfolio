$(document).ready(function(){
    $("#vms").on("click", function(){
        window.location.href = "https://iamjpyo.github.io/group_project/";
    });
    $("#hang-man").on("click", function(){
        window.location.href = "https://pirueto2004.github.io/Word-Guess-Game/";
    });
    $("#trivia").on("click", function(){
        window.location.href = "https://pirueto2004.github.io/TriviaGame/";
    });
    $("#train").on("click", function(){
        window.location.href = "https://pirueto2004.github.io/TrainScheduler/";
    });
    $("#gifs").on("click", function(){
        window.location.href = "https://pirueto2004.github.io/GifBoard/";
    });
    $("#crystal").on("click", function(){
        window.location.href = "https://pirueto2004.github.io/unit-4-game/";
    });

    //Toggle button to show/hide the info paragraphs
    $("#collapse").click(function(){     
        if($(this).text().trim() == "Show More") 
        {
          $(this).text("Show Less");
          $("#collapse-edu").toggle();
        }
        else
        {
          $(this).text("Show More");
          $("#collapse-edu").toggle();
        };      
    });

});