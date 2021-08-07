const navSlide = () => {
    const burgerr = document.querySelector('.side-menu');
    const navv = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu li');
    // console.log(navLinks);

    burgerr.addEventListener('click', () => {
        navv.classList.toggle('nav-active');

        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = 'navLinkFade 1s ease forwards 0.4s';

                console.log(index);
                console.log(link);
            }
        });

        burgerr.classList.toggle('toggle');

    });
}; 

navSlide();