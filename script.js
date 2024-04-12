const image1 = document.querySelector('.image1')
const image2 = document.querySelector('.image2')
const topTitle = document.querySelector('.top-title')

const mutate = (pct) => {
  image2.style.setProperty('--moveY', (200 - pct) * 5);
  topTitle.style.setProperty('--moveY', `${(1 - pct) * (1 - pct) * 200}vh`);
  topTitle.style.setProperty('--scale', `${(pct / 2 + .5)}`);
};

let last_known_scroll_position = 0;
let ticking = false;

function doSomething(scroll_pos) {
  // Do something with the scroll position
  mutate(1 + scroll_pos / window.innerHeight);
}

window.addEventListener('scroll', function(e) {
  last_known_scroll_position = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function() {
      doSomething(last_known_scroll_position);
      ticking = false;
    });

    ticking = true;
  }
});

    const images = Array.from(document.querySelectorAll('.image'))
    images.forEach((image) => {
      image.setAttribute(
        'src', 'images/portal.gif'
      );
    })