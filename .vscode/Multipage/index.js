document.addEventListener("DOMContentLoaded", function() {
    const form1 = document.getElementById("form1");
    const form2 = document.getElementById("form2");
    const form3 = document.getElementById("form3");
    const progress = document.getElementById("progress");
    const next1Btn = document.getElementById("next1");
    const next2Btn = document.getElementById("next2");
    const back1Btn = document.getElementById("back1");
    const back2Btn = document.getElementById("back2");
    const submitBtn = document.getElementById("submit");

    let currentStep = 1;

    next1Btn.addEventListener("click", function() {
        if (form1.checkValidity()) {
            const password = document.getElementById("password").value;
            const confirmPassword = document.getElementById("confirmPassword").value;

            if (password !== confirmPassword) {
                alert("Passwords do not match.");
            } else {
                form1.style.left = "-450px";
                form2.style.left = "40px";
                progress.style.width = "240px";
                updateProgress(++currentStep);
            }
        } else {
            form1.reportValidity();
        }
    });

    next2Btn.addEventListener("click", function() {
        if (form2.checkValidity()) {
            form2.style.left = "-450px";
            form3.style.left = "40px";
            progress.style.width = "240px";
            updateProgress(++currentStep);
        } else {
            form2.reportValidity();
        }
    });

    back1Btn.addEventListener("click", function() {
        form2.style.left = "450px";
        form1.style.left = "40px";
        progress.style.width = "240px";
        updateProgress(--currentStep);
    });

    back2Btn.addEventListener("click", function() {
        form3.style.left = "450px";
        form2.style.left = "40px";
        progress.style.width = "240px";
        updateProgress(--currentStep);
    });

    submitBtn.addEventListener("click", function() {
        if (form3.checkValidity()) {
            alert("Form submitted successfully!");
        } else {
            form3.reportValidity();
        }
    });

    function updateProgress(step) {
        progress.style.width = ((step - 1) / 2) * 100 + "%";
    }

    // Function to toggle password visibility
    function togglePasswordVisibility(fieldId) {
        const passwordField = document.getElementById(fieldId);
        const eyeIcon = passwordField.nextElementSibling.querySelector('i');

        if (passwordField.type === "password") {
            passwordField.type = "text";
            eyeIcon.classList.remove('fa-eye');
            eyeIcon.classList.add('fa-eye-slash');
        } else {
            passwordField.type = "password";
            eyeIcon.classList.remove('fa-eye-slash');
            eyeIcon.classList.add('fa-eye');
        }
    }

    // Event listeners for toggling password visibility
    document.querySelectorAll('.toggle-password').forEach(item => {
        item.addEventListener('click', event => {
            const fieldId = event.target.parentNode.previousElementSibling.id;
            togglePasswordVisibility(fieldId);
        });
    });
});
