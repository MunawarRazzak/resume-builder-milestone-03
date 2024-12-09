// References to HTML elements
const generateResumeButton = document.getElementById('generateResume') as HTMLButtonElement;
const form = document.getElementById('resume') as HTMLFormElement;

const nameInput = document.getElementById('name') as HTMLInputElement;
const emailInput = document.getElementById('email') as HTMLInputElement;
const phoneInput = document.getElementById('phone') as HTMLInputElement;
const profilePictureInput = document.getElementById('profilePicture') as HTMLInputElement;
const educationInput = document.getElementById('education') as HTMLTextAreaElement;
const experienceInput = document.getElementById('experience') as HTMLTextAreaElement;
const skillInput = document.getElementById('skill') as HTMLTextAreaElement;

const resumePreview = document.getElementById('resumePreview') as HTMLDivElement;
const displayName = document.getElementById('displayName') as HTMLSpanElement;
const displayEmail = document.getElementById('displayEmail') as HTMLSpanElement;
const displayPhone = document.getElementById('displayPhone') as HTMLSpanElement;
const displayProfilePicture = document.getElementById('displayProfilePicture') as HTMLImageElement;
const displayEducation = document.getElementById('displayEducation') as HTMLSpanElement;
const displayExperience = document.getElementById('displayExperience') as HTMLSpanElement;
const displaySkills = document.getElementById('displaySkills') as HTMLSpanElement;

// Form validation
function checkFormValidity(): boolean {
    return form.checkValidity();
}

// Generate resume on button click
generateResumeButton.addEventListener('click', () => {
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
            const file = profilePictureInput.files[0];
            const reader = new FileReader();
            reader.onload = (e) => {
                displayProfilePicture.src = e.target?.result as string;
            };
            reader.readAsDataURL(file);
        }

        // Show resume preview
        resumePreview.style.display = 'block';
    } else {
        alert('Please fill in all required fields.');
    }
});

// Disable "Generate Resume" button until form is valid
form.addEventListener('input', () => {
    generateResumeButton.disabled = !checkFormValidity();
});
