$(document).ready(function(){

    //Select '<a>' tags with class '.btn'
    const buttonClicked = $(".btn");
    
    buttonClicked.on("click", function(){

        let buttonId = $(this).attr("id");

        switch (buttonId) {
            case "vms_page" :
                window.location.href = "https://iamjpyo.github.io/group_project/";
                break;
            case "vms_code" :
                window.location.href = "https://github.com/iamjpyo/group_project";
                break;

            case "hangman_page":
                window.location.href = "https://pirueto2004.github.io/Word-Guess-Game/";
                break;
            case "hangman_code":
                window.location.href = "https://github.com/pirueto2004/Word-Guess-Game";
                break;

            case "trivia_page" :
                window.location.href = "https://pirueto2004.github.io/TriviaGame/";
                break;
            case "trivia_code" :
                window.location.href = "https://github.com/pirueto2004/TriviaGame";
                break;
            case "trivia_post" :
                window.location.href = "https://www.linkedin.com/pulse/trivial-trivia-quiz-julio-bell";
                break;
                
            case "train_page" :
                window.location.href = "https://pirueto2004.github.io/TrainScheduler/";
                break;
            case "train_code" :
                window.location.href = "https://github.com/pirueto2004/TrainScheduler";
                break;
            case "train_post" :
                window.location.href = "https://www.linkedin.com/pulse/train-scheduler-julio-bell";
                break;

            case "gifs_page" :
                window.location.href = "https://pirueto2004.github.io/GifBoard/";
                break;
            case "gifs_code" :
                window.location.href = "https://github.com/pirueto2004/GifBoard";
                break;
            case "gifs_post" :
                window.location.href = "https://www.linkedin.com/pulse/collection-awesome-gifs-julio-bell";
                break;
                
            case "crystal_page" :
                window.location.href = "https://pirueto2004.github.io/unit-4-game/";
                break;
            case "crystal_code" :
                window.location.href = "https://github.com/pirueto2004/unit-4-game";
                break;
            case "crystal_post" :
                window.location.href = "https://www.linkedin.com/pulse/crystal-collector-julio-bell";
                break;
       }
    });
   

    

    // $("#vms_page").on("click", function(){
    //     window.location.href = "https://iamjpyo.github.io/group_project/";
    // });
    // $("#hangman_page").on("click", function(){
    //     window.location.href = "https://pirueto2004.github.io/Word-Guess-Game/";
    // });
    // $("#trivia_page").on("click", function(){
    //     window.location.href = "https://pirueto2004.github.io/TriviaGame/";
    // });
    // $("#train_page").on("click", function(){
    //     window.location.href = "https://pirueto2004.github.io/TrainScheduler/";
    // });
    // $("#gifs_page").on("click", function(){
    //     window.location.href = "https://pirueto2004.github.io/GifBoard/";
    // });
    // $("#crystal_page").on("click", function(){
    //     window.location.href = "https://pirueto2004.github.io/unit-4-game/";
    // });

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