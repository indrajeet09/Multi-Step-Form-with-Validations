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
            console.log("Next button clicked on form 1");
            form1.style.left = "-450px";
            form2.style.left = "40px";
            progress.style.width = "240px"
            updateProgress(++currentStep);
        } else {
            form1.reportValidity();
        }
    });
    
    
    next2Btn.addEventListener("click", function() {
        if (form2.checkValidity()) {
            console.log("Next button clicked on form 2");
            form1.style.left = "-100%"; 
            form2.style.left = "-100%"; 
            form3.style.left = "0";    
            updateProgress(++currentStep);
        } else {
            form2.reportValidity();
        }
    });
    
    
    back1Btn.addEventListener("click", function() {
        console.log("Back button clicked on form 2");
        form2.style.left = "450px";
        form1.style.left= "40px";
        updateProgress(--currentStep);
    });
    
    back2Btn.addEventListener("click", function() {
        console.log("Back button clicked on form 3");
        form3.style.left = "450px";
        form2.style.left= "40px";
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
});
