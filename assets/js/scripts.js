function toggleMute() {
    const mediaElements = document.querySelectorAll('audio, video');
    const muteButton = document.getElementById('muteButton');
    mediaElements.forEach(element => {
        element.muted = !element.muted;
    });
    if (mediaElements.length > 0 && mediaElements[0].muted) {
        muteButton.style.backgroundColor = 'red';
    } else {
        muteButton.style.backgroundColor = '';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const mediaElements = document.querySelectorAll('audio, video');
    mediaElements.forEach(element => {
        element.muted = true;
    });
    document.getElementById('muteButton').style.backgroundColor = 'red';

    const scrollToTopButton = document.getElementById('scrollToTopButton');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            scrollToTopButton.style.display = 'block';
        } else {
            scrollToTopButton.style.display = 'none';
        }
    });

    scrollToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    fitToWindow();
    window.addEventListener('resize', fitToWindow);
});

function fitToWindow() {
    const container = document.querySelector('.container');
    const scale = Math.min(window.innerWidth / container.offsetWidth, 1);
    container.style.transform = `scale(${scale})`;
    container.style.transformOrigin = 'top left';
}
