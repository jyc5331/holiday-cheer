// develop branch MAKE SURE YOUR SCREEN WIDTH IS 750PX OR LOWER
const cookieSearchBtn = document.getElementById("cookieSearchBtn");
const cookieContainer = document.getElementById("cookieContainer");
const cookieImage = document.getElementById("cookieImage");
const cookieTitle = document.getElementById("cookieTitle");
const cookieDescription = document.getElementById("cookieDescription");

fetch('https://api.spoonacular.com/recipes/complexSearch?query=cookies&number=170&apiKey=37ea1e03e0d84b67992ee6276a961a91')
    .then(cookieResults => cookieResults.json())
    .then(cookieData => console.log(cookieData))


const cookieSearch = function(){
    event.preventDefault();
    console.log("running a cookie search now");

    //generate the card, thoughts on card display: should only be title that links to recipe, a short description, and a picture
    cookieContainer.innerHTML +=
    `<div class="card-content m-5">
    <div class="media">
       <div class="media-left">
        <figure class="image is-128x128 card-image" id="cookieImage">
          <img src="https://bulma.io/images/placeholders/256x256.png" alt="Placeholder image">
        </figure>
       </div>
       <div class="media-content">
        <p class="title is-4" id="cookieTitle">Recipe Title</p>
        <p id="cookieDescription"> Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad deserunt aperiam, quo ullam nihil ea deleniti, ducimus velit est, voluptas architecto debitis? Alias praesentium autem velit? Voluptatibus eligendi nemo quia?</p>
       </div>
    </div>
</div>`
};  

