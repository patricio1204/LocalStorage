document.getElementById('buttonText').addEventListener('click', function() {
    const inputValue = document.getElementById('inputText').value;
    localStorage.setItem('savedData', inputValue);
    alert('Dato guardado!');
});
