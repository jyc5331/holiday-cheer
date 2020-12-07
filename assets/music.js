var musicButton = document.getElementById("music-button");

var musicModal = document.getElementById("music-modal");

var closeButton = document.getElementById("close-button");


var displayModal = function () {
    
    musicModal.classList.add("is-active")   
};


var closeModal = function () {

    musicModal.classList.remove("is-active")
    
}

musicButton.addEventListener("click", displayModal);

closeButton.addEventListener("click", closeModal);