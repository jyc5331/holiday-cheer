var openCharityBtn = document.getElementById("charity-button");

var charityModal = document.getElementById("openModal");

var closeCharityBtn = document.getElementById("close-button2");

// Fxn to open modal 
var openCharityModal = function () {
    openCharityBtn.onclick = function () {
        charityModal.style.display = "block";
    }
};

// Fxn that will fetch charity api data

// Fxn to populate modal with fetched data

// Fxn to close modal
closeCharityBtn.onclick = function () {
    charityModal.style.display = "none";
}














// Event Listeners
openCharityBtn.addEventListener("click", openCharityModal);