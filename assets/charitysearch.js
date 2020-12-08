var openCharityBtn = document.getElementById("charity-button");

var charityModal = document.getElementById("openModal");

var closeCharityBtn = document.getElementById("close-button2");

var searchInputEl = document.getElementById("search-input");

var searchBtn = document.getElementById("site-search");

// FXN TO OPEN MODAL 
var openCharityModal = function () {
    openCharityBtn.onclick = function () {
        charityModal.style.display = "block";
    }
};

// Fxn that will search charity api data

//  var searchInput = document.getElementById("search-input");

//  searchInput.value = ""
 
//  var getSearchInput = function () {

//     // event.preventDefault();
  
//     var searchInput = searchInput.value

//     searchBtn.onclick = fetchCharityData(searchInput);
//     console.log(searchInput);
 
//   };

// FXN TO SUBMIT SEARCH INPUT 
var searchInputHandler = function(event) {
    event.preventDefault();

    // get value from input element
    var charity = searchInputEl.value.trim();

    if (charity) {
        fetchCharityData(charity);
        searchInputEl.value = "";
    } else {
        alert("Please enter a charity keyword");
    }
    //console.log(event);
};

// FXN THAT WILL FETCH DATA
var fetchCharityData = function (searchInput) {

    charity = searchInput;
    
    // format charity search url
    var charityDataApiUrl = "https://data.orghunter.com/v1/charitysearch?user_key=b621ed5a3921119ea871a341755aece6&searchTerm=" + searchInput + "";

    // make a request to api
    fetch(charityDataApiUrl)
        .then(function(response) {
          // if request succesful  
          if (response.ok){
            console.log("fetched data");
        }
    }

 )};

// Fxn to display data in modal 

// FXN TO CLOSE MODAL
closeCharityBtn.onclick = function () {
    charityModal.style.display = "none";
};














// Event Listeners
openCharityBtn.addEventListener("click", openCharityModal);
searchBtn.addEventListener("click", searchInputHandler);