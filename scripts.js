// Example script to handle bubble interactions
document.addEventListener('DOMContentLoaded', (event) => {
    const bubbles = document.querySelectorAll('.bubble');

    bubbles.forEach(bubble => {
        bubble.addEventListener('click', function() {
            if (this.textContent === '+') {
                alert('More tutorials coming soon!');
            }
        });
    });
});
