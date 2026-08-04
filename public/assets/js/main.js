/*========== Mixitup Filter ==========*/
let mixerProjects = mixitup('.projects__container', {
    selectors: {
        target: '.project__item',
    },
    animation: {
        duration: 300,
    },
})

/*Active work */
const linkWork = document.querySelectorAll('.category__btn');

function activeWork() {
    linkWork.forEach((a) => a.classList.remove('active-work'));
    this.classList.add('active-work');
}

linkWork.forEach((a) => a.addEventListener('click', activeWork));

/*========== Swiper Slider ==========*/
var testiSwiper = new Swiper(".testimonials__container", {
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
});

/*========== Contact form ==========*/
const contactForm = document.getElementById('contact-form'),
    contactName = document.getElementById('contact-name'),
    contactEmail = document.getElementById('contact-email'),
    Message = document.getElementById('message'),
    contactMessage = document.getElementById('contact-message');

const sendEmail = (e) => {
    e.preventDefault();
    if (contactName.value === '' || contactEmail.value === '' || Message.value === '') {
        contactMessage.classList.remove('color-light');
        contactMessage.classList.add('color-dark');
        contactMessage.textContent = 'Write all the input fields';
    } else {
        emailjs.sendForm('service_gssby0p','template_63uo2xm','#contact-form','506TK4tH7NHDyMXbF').then(() => {
            contactMessage.classList.remove('color-light');
            contactMessage.classList.add('color-dark');
            contactMessage.textContent = 'Message sent successfully';

            setTimeout(() => {
                contactMessage.textContent = '';
            }, 5000);
        }, (error) => {
            alert('OOPS! SOMETHING HAS FAILED...', error);
        });
        contactName.value = '';
        contactEmail.value = '';
        Message.value = '';
    }
};

contactForm.addEventListener('submit', sendEmail);

/*========== Home Matrix Rain ==========*/
const homeRainCanvas = document.getElementById('home-rain');

if (homeRainCanvas) {
    const homeSection = document.getElementById('home');
    const rainCtx = homeRainCanvas.getContext('2d');
    const rainChars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*';
    const fontSize = 15;
    const columnDrawChance = 0.45; // lower = fewer columns appear each frame
    let columns = 0;
    let drops = [];
    let rainTimer = null;

    const setupRain = () => {
        const sectionWidth = homeSection.clientWidth;
        const sectionHeight = homeSection.clientHeight;

        homeRainCanvas.width = sectionWidth;
        homeRainCanvas.height = sectionHeight;

        columns = Math.max(1, Math.floor(sectionWidth / fontSize));
        drops = Array.from({ length: columns }, () => {
            return Math.floor(Math.random() * -40);
        });
    };

    const drawRain = () => {
        rainCtx.fillStyle = 'rgba(0, 0, 0, 0.08)';
        rainCtx.fillRect(0, 0, homeRainCanvas.width, homeRainCanvas.height);

        rainCtx.font = `${fontSize}px "Roboto Mono", monospace`;
        rainCtx.fillStyle = 'rgba(255, 255, 255, 0.35)';

        for (let i = 0; i < drops.length; i += 1) {
            if (Math.random() > columnDrawChance) continue;

            const x = i * fontSize;
            const y = drops[i] * fontSize;
            const char = rainChars[Math.floor(Math.random() * rainChars.length)];

            rainCtx.fillText(char, x, y);

            if (y > homeRainCanvas.height && Math.random() > 0.975) {
                drops[i] = Math.floor(Math.random() * -40);
            } else {
                drops[i] += 1;
            }
        }
    };

    setupRain();
    rainTimer = setInterval(drawRain, 55);
    window.addEventListener('resize', setupRain);

    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            clearInterval(rainTimer);
            rainTimer = null;
            return;
        }

        if (!rainTimer) {
            rainTimer = setInterval(drawRain, 55);
        }
    });
}


