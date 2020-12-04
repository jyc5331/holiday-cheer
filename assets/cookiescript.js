// develop branch MAKE SURE YOUR SCREEN WIDTH IS 750PX OR LOWER

var cookieSearchBtn = document.getElementById("cookieSearchBtn");
var cookieContainer = document.getElementById("cookieContainer");

// var cookieImage = document.getElementById("cookieImage");
// var cookieTitle = document.getElementById("cookieTitle");
// var cookieDescription = document.getElementById("cookieDescription");

var cookieInput = document.getElementById("cookie-input");


var getSearchTerm = function (event) {

  event.preventDefault();

  var searchTerm = cookieInput.value
   
  getCookieData(searchTerm)

  
};



var getCookieData = function (searchTerm) {

  console.log(searchTerm)
  
  var cookieDataApiUrl = 'https://api.spoonacular.com/recipes/complexSearch?query='+searchTerm+'+cookies&addRecipeInformation=true&number=170&apiKey=37ea1e03e0d84b67992ee6276a961a91'

    //format the response/promise
    fetch(cookieDataApiUrl)
        .then(function(response) {
          if (response.ok){
            response.json().then(function(data) {

              // call displayCookieData and pass data as an argument
              console.log(data);
              displayCookieData(data);
              
            });
          } else {
          alert("Error: " + response.statusText);
          }
        })
        .catch(function(error) {
          alert("unable to connect to server");
        });
   
};


var displayCookieData = function(data){
  
  // loop through the data and dynamically create the recipie cards 

  for (var i= 0;  i < data.results.length; i++ ) {

    var div = document.createElement("div")

    var innerHtml = 

      '<div class="card-content m-5">'+
        '<div class="media">' +
          '<div class="media-left">' +
          '<figure class="image is-128x128 card-image">' +
            '<img src="'+ data.results[i].image +'" alt="Placeholder image">'+
          '</figure>'+
         '</div>' +
         '<div class="media-content">'+
            '<p class="title is-4" id="cookieTitle">'+ data.results[i].title +'</p>'+
            '<p></p><br>'+
            '<a href="" >Recipie Link</a>' +
         '</div>'+
        '</div>'+
      '</div>'

      div.innerHTML = innerHtml

      cookieContainer.appendChild(div);
  }
 
}; 



cookieSearchBtn.addEventListener("click", getSearchTerm);