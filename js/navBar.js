const header = document.querySelector('#header');
let prevScrollPos = window.scrollY;
let lastKnownScrollPosition = 0;
let ticking = false;

window.addEventListener('scroll', () => {
  lastKnownScrollPosition = window.scrollY;
  if (!ticking) {
    window.requestAnimationFrame(() => {
      if (lastKnownScrollPosition > prevScrollPos && lastKnownScrollPosition > 0 && lastKnownScrollPosition < document.body.scrollHeight - window.innerHeight + 100) {
        // scroll down and not at the bottom or top
        header.classList.add('hidden');
      } else if (lastKnownScrollPosition < prevScrollPos || lastKnownScrollPosition === 0 || lastKnownScrollPosition >= document.body.scrollHeight - window.innerHeight) {
        // scroll up or at top or at bottom
        header.classList.remove('hidden');
      }
      prevScrollPos = lastKnownScrollPosition;
      ticking = false;
    });
    ticking = true;
  }
});

let timeoutId;
window.addEventListener('scroll', () => {
  clearTimeout(timeoutId);
  timeoutId = setTimeout(() => {
    if (window.scrollY > 0 && window.scrollY < document.body.scrollHeight - window.innerHeight) {
      header.classList.add('hidden');
    } else if (window.scrollY >= document.body.scrollHeight - window.innerHeight) {
      header.classList.add('hidden');
    }
  }, 2000);
});
