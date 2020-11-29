// random acts of kindness generator 

// global variables 

var generateButton = document.getElementById("generate-button");

var displayKindIdea = document.getElementById("generate-textarea");

var kindnessArray = ["Buy coffee for the person behind you in line.", "Volunteer", "Shovel your neighbors walkway or driveway."];

// counter for kindess generator 
i = 0;


var randomActsofKindessInput = document.getElementById("kindess-input");

var addToListBtn = document.getElementById("add-to-list-btn");

var userStoryListEl = document.getElementById("kindess-list");

userStoryList = [];

// when the user clicks the generate button an idea should display in the textarea from an array 

var generateRandomActsofKindness = function (event) {

    event.preventDefault();
  
    displayKindIdea.innerHTML = kindnessArray[i]
        
        console.log(kindnessArray[i]);

        if (i< kindnessArray.length - 1) {
            i++
        } else{
            i=0
        }         
};



// when a user clicks "Add to List" the input is displayed in the list and saved in local storage 


// add a story to the random acts of kindess list 
// save random acts of kindess on button click 
var saveRandomActsofKindess = function (event) {

    event.preventDefault();


    var userStory = randomActsofKindessInput.value

    if(randomActsofKindessInput.value === null || randomActsofKindessInput.value === "") {
        alert("you must enter a value to add to the list!")
    }

    userStoryList.push(userStory);

    localStorage.setItem("userStoryList",JSON.stringify(userStoryList))

    // clear the input box after button click 

    randomActsofKindessInput.value = ""

    // call loadkindessList so that when the user clicks add to list the input displays 
    loadKindessList();

};

// call this function on page load
var loadKindessList = function () {


    // get saved stories from local storage and dynamically disply it as an li and append it to the ul

    // getitems from local storage, check to see if there is anything in local storage, if not, set userStoryList = to empty array 

    // need to clear the inner html before the list is loaded from local storage
    userStoryListEl.innerHTML = ""

    userStoryList = JSON.parse(localStorage.getItem("userStoryList")) || [];

    console.log(userStoryList);

    //userStoryListEl.innerHTML = ""

    

        for (var i= 0; i < userStoryList.length; i++) {

            var li = document.createElement("li")

            li.classList.add("p-2")

            li.innerHTML = userStoryList[i]

            userStoryListEl.appendChild(li)
        }
    
};


loadKindessList();








addToListBtn.addEventListener("click", saveRandomActsofKindess);

generateButton.addEventListener("click", generateRandomActsofKindness);