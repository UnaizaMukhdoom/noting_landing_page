// ===== HAMBURGER MENU TOGGLE =====
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Close menu when a link is clicked
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
  if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
    navLinks.classList.remove('open');
  }
});


// The whole <form> tag
var form = document.getElementById('contactForm');

// The three step panels (each big section inside the form)
var step1 = document.getElementById('step1');
var step2 = document.getElementById('step2');
var step3 = document.getElementById('step3');

// The step indicator dots at the top (Step 1, Step 2, Done)
var stepDots = document.querySelectorAll('.step');

// The input fields
var nameInput  = document.getElementById('fname');
var emailInput = document.getElementById('femail');

// The error message spots under each input
var nameError  = document.getElementById('fname-error');
var emailError = document.getElementById('femail-error');

// The buttons
var nextBtn   = document.getElementById('nextStep1');
var backBtn   = document.getElementById('backStep2');
var submitBtn = document.getElementById('submitForm');

function goToStep(stepNumber) {

  // Hide all step panels first
  step1.classList.add('hidden');
  step2.classList.add('hidden');
  step3.classList.add('hidden');

  // Show only the one we want
  if (stepNumber === 1) { step1.classList.remove('hidden'); }
  if (stepNumber === 2) { step2.classList.remove('hidden'); }
  if (stepNumber === 3) { step3.classList.remove('hidden'); }

  stepDots.forEach(function(dot, index) {
    var dotNumber = index + 1; // dots are 0-indexed, steps are 1-indexed

    // Remove old classes first
    dot.classList.remove('active', 'completed');
 

    // This dot is the CURRENT step
    if (dotNumber === stepNumber) {
      dot.classList.add('active');
   
    }

    // This dot is a PAST step (already done)
    if (dotNumber < stepNumber) {
      dot.classList.add('completed');
      dot.querySelector('.step-circle').textContent = '✓';
    }

  });
}

// ---- FUNCTION: SHOW AN ERROR MESSAGE UNDER AN INPUT ----
function showError(input, errorSpan, message) {
  input.classList.add('input-error');       // red border on the input
  errorSpan.textContent = message;          // show the error text
                  
}


// ---- FUNCTION: CLEAR AN ERROR MESSAGE ----
function clearError(input, errorSpan) {
  input.classList.remove('input-error');      // remove red border
  errorSpan.textContent = '';                 // remove the error text

}


// ---- BUTTON: NEXT (Step 1 → Step 2) ----
nextBtn.addEventListener('click', function() {

  var isValid = true;

 
  if (nameInput.value.trim() === '') {
    showError(nameInput, nameError, '⚠ Full name is required');
    isValid = false;
  } else {
    clearError(nameInput, nameError);
  }

  // Check: did the user type an email?
  if (emailInput.value.trim() === '') {
    showError(emailInput, emailError, '⚠ Email address is required');
    isValid = false;

  // Check: does the email look valid? (has @ and a dot after it)
  } else if (emailInput.value.indexOf('@') === -1 || emailInput.value.indexOf('.') === -1) {
    showError(emailInput, emailError, '⚠ Please enter a valid email');
    isValid = false;

  } else {
    clearError(emailInput, emailError);
  }

  // Only move forward if both fields are good
  if (isValid === true) {
    goToStep(2);
  }

});

// ---- BUTTON: BACK (Step 2 → Step 1) ----
backBtn.addEventListener('click', function() {
  goToStep(1);
});


//  FORM SUBMIT (Step 2 → Step 3) 
form.addEventListener('submit', function(event) {

  // Stop the page from refreshing (default form behavior)
  event.preventDefault();

  // Show loading state on the button so the user knows something is happening
  submitBtn.textContent = 'Creating account...';
  submitBtn.disabled = true;

  // Pretend we're talking to a server (wait 1.2 seconds)
  setTimeout(function() {

    // After the "server" responds, go to the success screen
    goToStep(3);

    // Reset the button text in case user comes back
    submitBtn.textContent = 'Create account →';
    submitBtn.disabled = false;

  }, 1200);

});


// modal

nameInput.addEventListener('input', function() {
  clearError(nameInput, nameError);
});

emailInput.addEventListener('input', function() {
  clearError(emailInput, emailError);
});

const openModal = document.getElementById("openModal");
const closeModal = document.getElementById("closeModal");
const modal = document.getElementById("demoModal");

openModal.addEventListener("click", () => {
  modal.style.display = "flex";
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
