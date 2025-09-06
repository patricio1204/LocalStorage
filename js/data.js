window.addEventListener('DOMContentLoaded', (event) => {
    const savedData = localStorage.getItem('savedData');
    if (savedData) {
        document.getElementById('data').textContent = savedData;
    } else {
        document.getElementById('data').textContent = 'No hay dato guardado.';
    }
});
