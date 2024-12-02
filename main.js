let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.nav-item a');

window.onscroll = () => {
    navLinks.forEach((link) => {
        link.classList.remove('Aktif');
    });
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 110;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        
        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('Aktif');
                document.querySelector('.nav-item a[href*=' + id + ']').classList.add('Aktif');
            });
        };
    });
};