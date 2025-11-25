
window.onload = function() {
  
    const savedTheme = localStorage.getItem('theme');
    const toggleInput = document.getElementById('darkModeToggle');

    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        toggleInput.checked = true;
    }
};

function ubahTema(event) {
    if (event.target.checked) {
        
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
    } else {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
    }
}