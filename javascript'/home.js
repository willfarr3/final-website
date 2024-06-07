const burger = document.getElementById('burger')
const dropdown = document.getElementById('dropdown')

function  theFunction() {
document.getElementById('burger').classList.toggle('show')
}

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const inputBox = document.getElementById('inputBox');
    const popupMessage = document.getElementById('popupMessage');

    inputBox.addEventListener('input', () => {
        if (inputBox.value.trim() !== "") {
            popupMessage.style.display = 'block';
        } else {
            popupMessage.style.display = 'none';
        }
    });
});

