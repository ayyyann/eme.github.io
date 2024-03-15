/* splash screen*/
document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        var splashScreen = document.getElementById("splash-screen");
        var homePage = document.getElementById("home-page");

        splashScreen.style.animation = "fadeOutAndShow ease-out 1s forwards";
        setTimeout(function () {
            splashScreen.style.display = "none";
            homePage.style.display = "flex";
        }, 500);
    }, 5000); // Adjust the time based on your preference
});

/* welcome screen */
let currentPage = 1;
setTimeout(() => {
   
    document.getElementById('welcome-screen').style.display = 'block';
}, 3000); // Adjust the duration as needed

function showNextPage() {
    if (currentPage < 4) {
        document.getElementById(`page${currentPage}`).style.display = 'none';
        currentPage++;
        document.getElementById(`page${currentPage}`).style.display = 'block';
    } else {
        // Optionally, you can navigate to the OTP screen or perform other actions
        redirectToOTP();
    }
    if (currentPage === 4) {
        document.getElementById('nextButton').innerHTML = "Let's Start";
        document.getElementById('nextButton').classList.add('start-button');
    }
}
feather.replace();
document.querySelector(".nav-item").focus();


function redirectToOTP() {
    
    // For demonstration purposes, I'm redirecting to a hypothetical OTP screen
    window.location.href = 'login.html';
}

/* Chatbot */
