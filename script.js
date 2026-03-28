const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, observerOptions);

document.querySelectorAll('.tile').forEach(tile => {
    tile.style.opacity = "0";
    tile.style.transform = "translateY(50px)";
    tile.style.transition = "all 0.8s ease-out";
    observer.observe(tile);
});
