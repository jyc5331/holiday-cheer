// random acts of kindness generator 

// global variables 

var generateButton = document.getElementById("generate-button");

var displayKindIdea = document.getElementById("generate-textarea");

var kindnessArray = ["Buy a coffee for the person behind you in line", "Volunteer at a local nonprofit", "Shovel your neighbors walkway or driveway", "Sing along with your friend next time they burst into song", "Pick up some trash on your next walk", "When someone cuts you off, wish them a happy holidays, and mean it!", "Check in with one of your neighbors, or just leave a nice note on their door", "Give a follow or share the content of a nonprofit organization on social media", "When you get frustrated, treat yourself like you would want someone else to treat you", "Put a few dollars in your pocket to tip the next small business you buy food or coffee at", "Take a few seconds right now to take some deep breaths and think about something you're grateful for", "compliment a stranger (but don't be creepy).","bake cookies for someone!","write a note telling a loved one or friend what you admire about them","offer to babysit for free", "make time to 'be there'... go support a friend or loved one in a situation that means something to them. It could be a sporting event, a school play or event etc."];

// counter for kindess generator 
i = 0;


var randomActsofKindessInput = document.getElementById("kindess-input");

var addToListBtn = document.getElementById("add-to-list-btn");

var userStoryListEl = document.getElementById("kindess-list");

userStoryList = [];


randomActsofKindessInput.value = ""



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

    console.log(randomActsofKindessInput.value);

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

    // top of the list will always include these examples 
    userStoryListEl.innerHTML = 

    "<li class='p-2'>I paid for a woman's groceries when her credit card got declined.</li>"+
    "<li class='p-2'>I saw a 10 year old boy give his winter coat to another student who couldn't afford a new one</li>" +
    "<li class='p-2'>EVERY Christmas my sister buys and wraps a bunch of toys for 'Toys for Tots'.</li>"+
    "<li class='p-2'>I had a family friend that paid for my college school books every year.</li>"

    userStoryList = JSON.parse(localStorage.getItem("userStoryList")) || [];

    //console.log(userStoryList);

 

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