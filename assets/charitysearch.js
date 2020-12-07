var openCharityBtn = document.getElementById("charity-button");

var charityModal = document.getElementById("openModal");

var closeCharityBtn = document.getElementById("close-button2");

var searchBtn = document.getElementById("site-search");

// Fxn to open modal 
var openCharityModal = function () {
    openCharityBtn.onclick = function () {
        charityModal.style.display = "block";
    }
};

// Fxn that will search charity api data

 var searchInput = document.getElementById("search-input");

 searchInput.value = ""
 
 var getSearchInput = function (event) {

    // event.preventDefault();
  
    var searchInput = searchInput.value
     
    // fetchCharityData(searchInput)
  
    // searchInput.value = ""

    event.preventDefault();

    searchBtn.onclick = fetchCharityData();
    
 
  };

// Fxn that will pass search input as argument through fecthCharityData
  
var fetchCharityData = function (searchInput) {

    // console.log(searchTerm)

    var charityDataApiUrl = "http://data.orghunter.com/v1/charitysearch?user_key=b621ed5a3921119ea871a341755aece6&searchTerm=" + searchInput + ""

    fetch(charityDataApiUrl)
        .then(function(response) {
          if (response.ok){
            console.log("fetched data");
        }
    }

 )};

// Fxn to populate modal with fetched data

// Fxn to close modal
closeCharityBtn.onclick = function () {
    charityModal.style.display = "none";
};














// Event Listeners
openCharityBtn.addEventListener("click", openCharityModal);
searchBtn.addEventListener("submit", fetchCharityData);