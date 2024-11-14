document.addEventListener("DOMContentLoaded", function() {
    // Hide preloader once content is loaded
    const preloader = document.getElementById("preloader");
    preloader.style.display = "none"; // Hide preloader after page loads

    // Handle sticky navbar
    window.addEventListener("scroll", function() {
        const navbar = document.getElementById("navbar");
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }

        // Show or hide scroll-to-top button
        const scrollToTopButton = document.getElementById("scrollToTop");
        if (window.scrollY > 300) {
            scrollToTopButton.style.display = "block";
        } else {
            scrollToTopButton.style.display = "none";
        }
    });

    // Scroll to top on button click
    document.getElementById("scrollToTop").addEventListener("click", function() {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // Modal popup
    document.addEventListener("DOMContentLoaded", function () {
        // Get the modal, close button, and overlay
        const modal = document.getElementById("modal");
        const closeModalButton = document.querySelector(".close");
    
        // Display the modal after a delay (e.g., 2 seconds after page load)
        setTimeout(() => {
            modal.style.display = "block";
        }, 2000);
    
        // Close modal when clicking the close button
        closeModalButton.addEventListener("click", () => {
            modal.style.display = "none";
        });
    
        // Close modal when clicking outside the modal content
        window.addEventListener("click", (event) => {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        });
    });
    

    // Countdown timer
    const countdownDate = new Date("Dec 31, 2024 23:59:59").getTime();
    const timerElement = document.getElementById("timer");

    setInterval(function() {
        const now = new Date().getTime();
        const distance = countdownDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        timerElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

        if (distance < 0) {
            clearInterval(interval);
            timerElement.innerHTML = "EXPIRED";
        }
    }, 1000);
});


document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contactForm");
    const formResponse = document.getElementById("formResponse");

    // Form submit handler
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the form from submitting the traditional way

        // Input values
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        // Basic validation
        if (!name || !email || !message) {
            formResponse.style.color = "red";
            formResponse.textContent = "Please fill out all fields.";
            formResponse.style.display = "block";
            return;
        }

        // Simulating form submission success
        formResponse.style.color = "green";
        formResponse.textContent = "Thank you for contacting us, we will get back to you soon!";
        formResponse.style.display = "block";

        // Reset form after submission
        contactForm.reset();
    });
});
