// -----------for typing animation --------------------
// Define an array of strings to type
const texts = ['Student', 'Designer', 'Creator', 'Coder'];
let index = 0;
let letterIndex = 0;
let isDeleting = false;

// Get a reference to the typing text element
const typingText = document.getElementById('typing-text');

// Define a function to type the next character or delete the previous one
function type() {

  // Get the current string to type
  const text = texts[index];

  // If we are currently deleting, remove the last character
  if (isDeleting) {
    typingText.textContent = text.substring(0, letterIndex - 1);
    letterIndex--;
  } 
  // Otherwise, add the next character
  else {
    typingText.textContent = text.substring(0, letterIndex + 1);
    letterIndex++;
  }

  // If we are done typing the current string, set the flag to start deleting
  if (!isDeleting && letterIndex === text.length) {
    isDeleting = true;
    setTimeout(type, 1000);
  } 
  // If we are done deleting the current string, move on to the next string
  else if (isDeleting && letterIndex === 0) {
    isDeleting = false;
    index = (index + 1) % texts.length;
    setTimeout(type, 100);
  } 
  // Otherwise, continue typing or deleting
  else {
    setTimeout(type, 150);
  }
}

// Call the type function to start the typing animation
type();


// -----------for About me --------------------
var tablinks = document.getElementsByClassName("tablinks");
var tabcont = document.getElementsByClassName("tabcont");

function opentab(tabname){
    for(var i = 0; i < tablinks.length; i++){
        tablinks[i].classList.remove("active-link");
    }
    for(var i = 0; i < tabcont.length; i++){
        tabcont[i].classList.remove("active-tab");
    }
    document.getElementById(tabname).classList.add("active-tab");
    event.currentTarget.classList.add("active-link");
}

// ---------------For My works------------------------------

// Expanding the images of the Designing projects
function expandImage(event) {
  event.preventDefault();
  var imgSrc = event.target.parentNode.previousElementSibling.getAttribute("src");
  var modal = document.getElementById("modal");
  var modalImage = document.getElementById("modal-image");
  var closeButton = document.getElementById("close-button");

  modalImage.setAttribute("src", imgSrc);
  modal.style.display = "block";

  closeButton.addEventListener("click", function() {
      modal.style.display = "none";
  });
}


//-----------Visibility  of the category buttons and their datas on the base of which is clicked------------
// Get all the category buttons
const categoryButtons = document.querySelectorAll('.category-button');

// Get all the worklists
const worklists = document.querySelectorAll('.worklist');

// Loop through all the category buttons
for (let i = 0; i < categoryButtons.length; i++) {
  const button = categoryButtons[i];

  // Add a click event listener to each button
  button.addEventListener('click', function() {
    // Remove the "active" class from all the category buttons
    for (let j = 0; j < categoryButtons.length; j++) {
      categoryButtons[j].classList.remove('active');
    }

    // Add the "active" class to the clicked button
    this.classList.add('active');

    // Hide all the worklists
    for (let j = 0; j < worklists.length; j++) {
      worklists[j].style.display = 'none';
    }

    // Show the related worklist
    const category = this.getAttribute('data-category');
    const relatedWorklist = document.querySelector(`.worklist.${category}`);
    relatedWorklist.style.display = 'grid';
  });
}


// -------------For contact me----------------





// ----------------For responsive--------------

    var menu =  document.getElementById("menu");

    function open(){
      menu.style.right = "0";
    }
    function close(){
      menu.style.right = "-200px";
    }