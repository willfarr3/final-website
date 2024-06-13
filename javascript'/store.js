

document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('button');
    const popupMessage = document.getElementById('popupMessage');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            popupMessage.style.display = 'block';
            setTimeout(() => {
                popupMessage.style.display = 'none';
            }, 2000);
        });
    });
});