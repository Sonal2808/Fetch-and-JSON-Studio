// TODO: add code here

      window.addEvenListener("Load",function(){
        fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
            console.log(response);
            response.json().then(function(json){
                console.log(json)
            });
        });

      });
    