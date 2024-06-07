document.addEventListener('DOMContentLoaded', () => {
    const counterElement = document.getElementById('counter');
    const incrementButton = document.getElementsById('incrementButton');
    let count = 0;

    incrementButton.addEventListener('click', () => {
        count++;
        counterElement.textContent = count;
    });
});