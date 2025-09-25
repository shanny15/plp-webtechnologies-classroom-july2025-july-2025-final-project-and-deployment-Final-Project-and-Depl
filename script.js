AOS.init({
    duration: 1000,
    once: true
});

document.addEventListener("DOMContentLoaded", function() {
    // Handle "Get Started" button in Hero section
    const getStartedBtn = document.querySelector('.hero .btn');
    if (getStartedBtn) {
        getStartedBtn.addEventListener('click', function() {
            alert("Let's get you started on your next adventure!");
            const aboutSection = document.querySelector('#about');
            if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    // Handle "More..." button in About section
    document.querySelectorAll('.about-text .btn').forEach(button => {
        button.addEventListener('click', function() {
            alert("More features coming soon!");
        });
    });

    // Handle "Book Now" buttons in Services section
    document.querySelectorAll('.service-card .btn').forEach(button => {
        button.addEventListener('click', function() {
            alert("Booking feature will be available soon!");
        });
    });

    // Handle Contact Form Submit button
    const submitBtn = document.querySelector('.submit');
    if (submitBtn) {
        submitBtn.addEventListener('click', function(event) {
            event.preventDefault();

            const name = document.querySelector('input[name="name"]').value.trim();
            const email = document.querySelector('input[name="email"]').value.trim();
            const agree = document.querySelector('input[name="check"]').checked;

            if (!name || !email) {
                alert("Please fill in both name and email.");
                return;
            }

            if (!agree) {
                alert("Please agree to the Terms and Conditions.");
                return;
            }

            alert(`Thank you ${name}, your message has been received!`);
            document.querySelector('form').reset();
        });
    }
});