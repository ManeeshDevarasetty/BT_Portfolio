// Smooth Scroll Behavior
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth' });
    });
});

// Navbar Active Link Highlight on Scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav ul li a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        if (window.scrollY >= section.offsetTop - 100) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

// Gallery Image Navigation
let currentIndex = 0;
const galleryContainer = document.querySelector('.gallery-container');
const galleryImages = document.querySelectorAll('.image-card');
const totalImages = galleryImages.length;

function updateGalleryPosition() {
    const offset = -currentIndex * (galleryImages[0].clientWidth + 20); // 20px includes margin
    galleryContainer.style.transform = `translateX(${offset}px)`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalImages;
    updateGalleryPosition();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    updateGalleryPosition();
}

document.querySelector('.next-btn').addEventListener('click', nextSlide);
document.querySelector('.prev-btn').addEventListener('click', prevSlide);

// Typing Animation in About Section
document.addEventListener('DOMContentLoaded', function () {
    const roleElement = document.querySelector('.role');
    const text = "I'm a Front-End Developer";
    let charIndex = 0;

    function typeText() {
        if (charIndex < text.length) {
            roleElement.innerHTML += text.charAt(charIndex);
            charIndex++;
            setTimeout(typeText, 100);
        }
    }
    roleElement.innerHTML = ''; // Clear initial content
    typeText();
});

// Form Validation
document.querySelector('form').addEventListener('submit', function (e) {
    const name = this.querySelector('input[type="text"]');
    const email = this.querySelector('input[type="email"]');
    const message = this.querySelector('textarea');

    if (!name.value || !email.value || !message.value) {
        e.preventDefault();
        alert('Please fill out all fields before submitting.');
    }
});

// Confetti Animation on Load (just for fun!)
function launchConfetti() {
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.innerText = '🎉';
        confetti.style.position = 'fixed';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.top = Math.random() * 100 + 'vh';
        confetti.style.fontSize = Math.random() * 20 + 15 + 'px';
        confetti.style.opacity = 1;
        confetti.style.transition = 'opacity 3s ease-out';
        document.body.appendChild(confetti);

        setTimeout(() => {
            confetti.style.opacity = '0';
            setTimeout(() => confetti.remove(), 3000);
        }, 100);
    }
}


// Top Rated Table Hover Effect
document.querySelectorAll('.education-table tbody tr').forEach(row => {
    row.addEventListener('mouseenter', () => row.style.backgroundColor = '#f0f0f0');
    row.addEventListener('mouseleave', () => row.style.backgroundColor = 'transparent');
});

// Skip unwanted link behavior (movie blog link)
document.querySelector('a[href="movie-blog.html"]')?.addEventListener('click', function (e) {
    e.preventDefault();
    // Add any specific action if needed
});

// Launch confetti on page load
window.onload = () => {
    launchConfetti();
};
