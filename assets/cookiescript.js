// Global Variable 

var cookieSearchBtn = document.getElementById("cookieSearchBtn");


// COOKIE DISPLAY 

var cookieJarRight = document.getElementById("cookie-jar-right");

var cookieJarLeft = document.getElementById("cookie-jar-left");

// COOKIE END

var cookieInput = document.getElementById("cookie-input");

cookieInput.value = ""




var getSearchTerm = function (event) {

  event.preventDefault();

  var searchTerm = cookieInput.value
   
  getCookieData(searchTerm)

  cookieInput.value = ""
  
};



var getCookieData = function (searchTerm) {

  console.log(searchTerm)
  
  var cookieDataApiUrl = 'https://api.spoonacular.com/recipes/complexSearch?query='+searchTerm+'+cookies&addRecipeInformation=true&number10&sort=popularity&apiKey=067debed41a440ddb99113e7486666de'
  

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

// set the innter html to "" to clear the place holder images before dynamically displaying fetched data

 cookieJarRight.innerHTML = ""

 cookieJarLeft.innerHTML = ""
  
  // needed to create two different arrays from the result so that I could display them properly using bulma tiles
  // used slice to create 2 arrays of 5 recipies and then looped through them individually to dynamically create the recipe cards  

  var arrayOne = data.results.slice(0,5)

  console.log(arrayOne);

  
  // loop through first 5 indexes of data array 

  for (var i= 0;  i < arrayOne.length; i++ ) {

    var div = document.createElement("div");
    div.classList.add("tile", "is-child", "box", "dynamic-div")

    var innerHTML = 
    '<p class="title is-size-6">'+ arrayOne[i].title+'</p>' +
    '<figure class="image is-4by3">' +
       '<a href="'+ arrayOne[i].sourceUrl+'"target="_blank"> <img src="'+ arrayOne[i].image +'"></a>'+
    '</figure>'

    div.innerHTML = innerHTML

    cookieJarLeft.appendChild(div);

  }

  var arrayTwo = data.results.slice(5,11)

  // loop through last 5 indexes of data array 

  for (var i= 0;  i < arrayTwo.length; i++ ){

   // console.log(arrayTwo[i].title);

    var divTwo = document.createElement("div");
    divTwo.classList.add("tile", "is-child", "box","dynamic-div")

    var innerHTMLTwo = 
    '<p class="title is-size-6">'+ arrayTwo[i].title+'</p>' +
    '<figure class="image is-4by3">' +
       '<a href="'+ arrayTwo[i].sourceUrl+'"target="_blank"> <img src="'+ arrayTwo[i].image +'"></a>'+
    '</figure>'

    divTwo.innerHTML = innerHTMLTwo

    cookieJarRight.appendChild(divTwo);

  }
 
}; 



cookieSearchBtn.addEventListener("click", getSearchTerm);