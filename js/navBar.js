const header = document.querySelector('#header');
let prevScrollPos = window.scrollY;

window.addEventListener('scroll', () => {
    const currentScrollPos = window.scrollY;
    if (currentScrollPos > prevScrollPos) {
        // scroll down
        header.classList.add('hidden');
    } else {
        // scroll up
        header.classList.remove('hidden');
    }
    prevScrollPos = currentScrollPos;
});






