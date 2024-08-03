// Google Analytics setup
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    
    form.addEventListener('submit', function (event) {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        if (!name || !email || !message) {
            alert('Please fill out all fields.');
            event.preventDefault(); // Prevent form submission
        } else {
            alert('Thank you for your message! We will get back to you soon.');
        }
    });
});

// Slick Carousel initialization
$(document).ready(function(){
    $('.testimonial-carousel').slick({
        autoplay: true,
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    });
});
