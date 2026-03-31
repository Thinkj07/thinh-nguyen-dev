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


