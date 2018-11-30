import Typed from 'typed.js';

function loadDynamicBannerText() {
  new Typed('#banner-typed-text', {
    strings: ["Enjoy the best cocktails", "come here"],
    typeSpeed: 70,
    loop: true
  });
}

export { loadDynamicBannerText };
