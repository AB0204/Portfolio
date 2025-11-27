// ===================================
// SCROLL PROGRESS INDICATOR
// ===================================
const scrollProgress = document.getElementById('scrollProgress');

window.addEventListener('scroll', () => {
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.scrollY / windowHeight) * 100;
    if (scrollProgress) {
        scrollProgress.style.width = scrolled + '%';
    }
});

// ===================================
// LOADING SKELETON
// ===================================
window.addEventListener('load', () => {
    const loadingSkeleton = document.getElementById('loadingSkeleton');
    if (loadingSkeleton) {
        setTimeout(() => {
            loadingSkeleton.classList.add('hidden');
            setTimeout(() => {
                loadingSkeleton.style.display = 'none';
            }, 1000);
        }, 1000); // Show skeleton for 1 second
    }
});
