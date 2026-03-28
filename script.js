window.addEventListener('scroll', () => {
    const nav = document.getElementById('floating-island');
    const heroText = document.querySelector('.kinetic-text');
    const scrollPos = window.scrollY;

    // Shrink Nav on scroll
    if (scrollPos > 100) {
        nav.style.width = "380px";
        nav.style.opacity = "0.9";
        nav.style.top = "15px";
    } else {
        nav.style.width = "480px";
        nav.style.opacity = "1";
        nav.style.top = "30px";
    }

    // Kinetic Typography: Text stretches as you scroll
    let stretch = 1 + (scrollPos * 0.0005);
    let skew = scrollPos * 0.01;
    heroText.style.transform = `scale(${stretch}) skewX(${skew * -0.1}deg)`;
});
