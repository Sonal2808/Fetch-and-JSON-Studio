window.addEventListener("load", function() {
  this.fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
    return response.json();
}).then( function(response) {
  //sorting
  let sortedAstronauts = response.sort(function(a,b){return b.hoursInSpace-a.hoursInSpace});
   //console.log(response); 
   //push out each astronaut to the screen  
   let myContainer = document.getElementById("container");
   //condition if its true or false
   let allMyHtml ="";
let myCount=`
<h3>Astronaut Count:${sortedAstronauts.length}</h3>`
allMyHtml += myCount;

     for(let i=0;i<response.length;i++){
        let myHtml=`
    <div class="astronaut">
    <div class="bio">
       <h3>${response[i].firstName}${response[i].lastName}</h3>
       <ul>
          <li>Hours in space:${response[i].hoursInSpace}</li>
          <li ${response[i].active ? 'style="color:green;" ': ''}>Active: ${response[i].active}</li>
          <li>Skills: ${response[i].skills.join(", ")}</li>
       </ul>
    </div>
    <img class="avatar" src="${response[i].picture}">
 </div>
    `;
    allMyHtml += myHtml;
   }
    myContainer.innerHTML = allMyHtml;
   
  } );
});
