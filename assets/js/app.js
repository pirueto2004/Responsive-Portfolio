$(document).ready(function(){

    //Select '<a>' tags with class '.btn'
    const buttonClicked = $(".btn");
    
    buttonClicked.on("click", function(){

        let buttonId = $(this).attr("id");

        switch (buttonId) {
            case "todo-app_page":
                window.location.href = "https://nodebased-todo-app.herokuapp.com/";
                break;
            case "todo-app_code":
                window.location.href = "https://github.com/pirueto2004/Todo-App";
                break;
            case "todo-app_post" :
                window.location.href = " ";
                break;

            case "forkify-app_page":
                window.location.href = "https://mysterious-crag-99992.herokuapp.com/#46956";
                break;
            case "forkify-app_code":
                window.location.href = "https://github.com/pirueto2004/just-cook-it-app";
                break;
            case "forkify-app_post" :
                window.location.href = " ";
                break;

            case "budget-app_page":
                window.location.href = "https://budget-builder-app.herokuapp.com/";
                break;
            case "budget-app_code":
                window.location.href = "https://github.com/pirueto2004/budget-planner";
                break;
            case "budget-app_post" :
                window.location.href = " ";
                break;

            case "project-app_page":
                window.location.href = "https://react-redux-firebase-app-dba38.web.app/";
                break;
            case "project-app_code":
                window.location.href = "https://github.com/pirueto2004/my-react-redux-firebase-app";
                break;
            case "project-app_post" :
                window.location.href = " ";
                break;
            case "yelpcamp_page":
                window.location.href = "https://glacial-tor-47265.herokuapp.com/";
                break;
            case "yelpcamp_code":
                window.location.href = "https://github.com/pirueto2004/yelpcamp-page-app";
                break;
            case "yelpcamp_post" :
                window.location.href = " ";
                break;
            case "ezvalpark_page":
                window.location.href = "https://ezvaletparking-app.herokuapp.com/";
                break;
            case "ezvalpark_code":
                window.location.href = "https://github.com/pirueto2004/EZValetParking-app";
                break;
            case "ezvalpark_post" :
                window.location.href = " ";
                break;

            case "googlebook_page":
                window.location.href = "https://mern-google-books-app.herokuapp.com/";
                break;
            case "googlebook_code":
                window.location.href = "https://github.com/pirueto2004/mern-google-books";
                break;
            case "googlebook_post" :
                window.location.href = " ";
                break;

            case "clickygame_page":
                window.location.href = "https://sleepy-coast-15218.herokuapp.com/";
                break;
            case "clickygame_code":
                window.location.href = "https://github.com/pirueto2004/clickyGame-app";
                break;
            case "clickygame_post" :
                window.location.href = " ";
                break;

            case "newspeek_page":
                window.location.href = "https://ancient-basin-53851.herokuapp.com/";
                break;
            case "newspeek_code":
                window.location.href = "https://github.com/pirueto2004/newsPeek-app";
                break;
            case "newspeek_post" :
                window.location.href = " ";
                break;

            case "warehouse_page":
                window.location.href = "https://warehouseconnect-app.herokuapp.com/";
                break;
            case "warehouse_code":
                window.location.href = "https://github.com/pirueto2004/myProject2";
                break;
            case "warehouse_post" :
                window.location.href = " ";
                break;
            case "burger_page":
                window.location.href = "https://mysterious-garden-21264.herokuapp.com/";
                break;
            case "burger_code":
                window.location.href = "https://github.com/pirueto2004/burger";
                break;
            case "burger_post" :
                window.location.href = "https://www.linkedin.com/feed/update/urn:li:activity:6548185993420304384";
                break;
            case "btn-slack":
                window.location.href = "https://julio-bell.slack.com/messages/CG1G972MQ/";
                break;
            case "btn-git":
                window.location.href = "https://github.com/pirueto2004";
                break;
            case "btn-li":
                window.location.href = "https://www.linkedin.com/in/julio-bell-bb36a417b/";
                break;
            case "btn-fb":
                window.location.href = "https://www.facebook.com/pirueto2004?ref=bookmarks";
                break;
            case "ff_page":
                window.location.href = "https://young-escarpment-45912.herokuapp.com/";
                break;
            case "ff_code":
                window.location.href = "https://github.com/pirueto2004/FriendFinder";
                break;
            case "ff_post" :
                window.location.href = "https://www.linkedin.com/feed/update/urn:li:activity:6538190906342854656";
                break;
            case "bamazon_code" :
                window.location.href = "https://github.com/pirueto2004/Bamazon-App";
                break;
            case "liri_code" :
                window.location.href = "https://github.com/pirueto2004/liri-node-app";
                break;
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
                window.location.href = "https://www.linkedin.com/feed/update/urn:li:activity:6533162029530836992";
                break;
                
            case "train_page" :
                window.location.href = "https://pirueto2004.github.io/TrainScheduler/";
                break;
            case "train_code" :
                window.location.href = "https://github.com/pirueto2004/TrainScheduler";
                break;
            case "train_post" :
                window.location.href = "https://www.linkedin.com/feed/update/urn:li:activity:6533173168633364480";
                break;

            case "gifs_page" :
                window.location.href = "https://pirueto2004.github.io/gifboard/";
                break;
            case "gifs_code" :
                window.location.href = "https://github.com/pirueto2004/gifboard";
                break;
            case "gifs_post" :
                window.location.href = "https://www.linkedin.com/feed/update/urn:li:activity:6533171020474433536";
                break;
                
            case "crystal_page" :
                window.location.href = "https://pirueto2004.github.io/unit-4-game/";
                break;
            case "crystal_code" :
                window.location.href = "https://github.com/pirueto2004/unit-4-game";
                break;
            case "crystal_post" :
                window.location.href = "https://www.linkedin.com/feed/update/urn:li:activity:6533169280219963392";
                break;
       }
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