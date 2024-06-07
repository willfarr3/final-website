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