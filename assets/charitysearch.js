var openCharityBtn = document.getElementById("charity-button");

var charityModal = document.getElementById("openModal");

var closeCharityBtn = document.getElementById("close-button2");

var searchInputEl = document.getElementById("search-input");

var searchBtn = document.getElementById("site-search");

var charityContainerEl = document.getElementById("charity1");

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
    var charityDataApiUrl = "https://cors-anywhere.herokuapp.com/https://data.orghunter.com/v1/charitysearch?user_key=b621ed5a3921119ea871a341755aece6&searchTerm=" + searchInput + "";

    // make a request to api
    fetch(charityDataApiUrl)
        .then(function(response) {
          // if request succesful  
          if (response.ok){
            response.json().then(function(data) {
                displayCharities(data.data);
              });
            } else {
              alert("Error: " + response.statusText);
            }
          })
          .catch(function(error) {
            alert("Unable to connect to OrgHunter.com");
          });
          };

// Fxn to display data in modal
var displayCharities = function(charity) {
 
    // check if api returned any repos
    if (charity.length === 0) {
    charityContainerEl.textContent = "No charities found.";
    return;
  }

    charityContainerEl.textContent = "";
    //searchInputEl.textContent = searchInput;

    // loop over charities
    for (var i = 0; i < charity.length; i++) {
        // format charity name
        var charityN = charity[i].charityName
  
        // create a container for each charity
        var charityEl = document.createElement("div");
        charityEl.classList.add("tile", "is-child", "box", "dynamic-div");
  
        // create a span element to hold charity name
        var titleEl = document.createElement("span");
        titleEl.textContent = charityN;

        //create a span element to hold charity url
        var charityUrlEl = document.createElement("span");
        charityUrlEl.setAttribute("href", charity[i].html_url);
        charityUrlEl.setAttribute("target", "_blank");
  console.log(charityUrlEl);
        // append to charity name container
        charityEl.appendChild(titleEl);

        //append charity url to container
        charityEl.appendChild(charityUrlEl);
        
        // append container to the dom
        charityContainerEl.appendChild(charityEl);
    }
};


// FXN TO CLOSE MODAL
closeCharityBtn.onclick = function () {
    charityModal.style.display = "none";
};




// Event Listeners
openCharityBtn.addEventListener("click", openCharityModal);
searchBtn.addEventListener("click", searchInputHandler);