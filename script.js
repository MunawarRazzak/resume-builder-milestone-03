// References to HTML elements
var generateResumeButton = document.getElementById('generateResume');
var form = document.getElementById('resume');
var nameInput = document.getElementById('name');
var emailInput = document.getElementById('email');
var phoneInput = document.getElementById('phone');
var profilePictureInput = document.getElementById('profilePicture');
var educationInput = document.getElementById('education');
var experienceInput = document.getElementById('experience');
var skillInput = document.getElementById('skill');
var resumePreview = document.getElementById('resumePreview');
var displayName = document.getElementById('displayName');
var displayEmail = document.getElementById('displayEmail');
var displayPhone = document.getElementById('displayPhone');
var displayProfilePicture = document.getElementById('displayProfilePicture');
var displayEducation = document.getElementById('displayEducation');
var displayExperience = document.getElementById('displayExperience');
var displaySkills = document.getElementById('displaySkills');
// Form validation
function checkFormValidity() {
    return form.checkValidity();
}
// Generate resume on button click
generateResumeButton.addEventListener('click', function () {
    if (checkFormValidity()) {
        // Capture form data
        displayName.textContent = nameInput.value;
        displayEmail.textContent = emailInput.value;
        displayPhone.textContent = phoneInput.value;
        displayEducation.textContent = educationInput.value;
        displayExperience.textContent = experienceInput.value;
        displaySkills.textContent = skillInput.value;
        // Handle profile picture
        if (profilePictureInput.files && profilePictureInput.files[0]) {
            var file = profilePictureInput.files[0];
            var reader = new FileReader();
            reader.onload = function (e) {
                var _a;
                displayProfilePicture.src = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
            };
            reader.readAsDataURL(file);
        }
        // Show resume preview
        resumePreview.style.display = 'block';
    }
    else {
        alert('Please fill in all required fields.');
    }
});
// Disable "Generate Resume" button until form is valid
form.addEventListener('input', function () {
    generateResumeButton.disabled = !checkFormValidity();
});
