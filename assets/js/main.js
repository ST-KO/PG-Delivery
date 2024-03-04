/*---------- SHOW MENU ----------*/
const navMenu = document.getElementById("nav-menu");
const navToogle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

/*-- Show Menu --*/
if(navToogle){
    navToogle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

/*-- Hide Menu --*/
if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove("show-menu");
    })
}

/*---------- REMOVE MENU MOBILE ----------*/
const navLink = document.querySelectorAll('.nav_link');

const linkAction = () => {
    navMenu.classList.remove('show-menu');
}

navLink.forEach(link => link.addEventListener('click', linkAction));

/*---------- ADD BLUR HEADER ----------*/
const blurHeader = () => {
    const header = document.getElementById("header");

    // Add a class if the bottom of the offset is greater than 50px 
    this.scrollY >= 50  ? header.classList.add('blur-header')
                        : header.classList.remove('blur-header');
}
window.addEventListener('scroll', blurHeader);

/*---------- SHOW SCROLL UP ----------*/ 
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up');

    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll');
};
window.addEventListener('scroll', scrollUp);

/*---------- SCROLL SECTIONS ACTIVE LINK ----------*/
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
    const scrollDown = window.scrollY;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58;
        const sectionId = current.getAttribute('id');
        const sectionsClass = document.querySelector('.nav_menu a[href*=' + sectionId + ']');

        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link');
        }else{
            sectionsClass.classList.remove('active-link');
        }
    })
}
window.addEventListener('scroll', scrollActive);

/*---------- SCROLL REVEAL ANIMATION ----------*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2500,
    delay: 300,
    reset: true, // Animations repeat
});

sr.reveal('.home_img, .new_data, .care_img, .contact_content, .footer');
sr.reveal('.home_data, .care_list, .contact_img', {delay: 200});
sr.reveal('.new_card', {delay: 200, interval: 100});
sr.reveal('.shop_card', {interval: 100});
