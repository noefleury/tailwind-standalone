/**
 * Easy function to toggle dark mode
 */
function toggleDarkMode() {
    const darkModeEnabled = document.getElementsByTagName('html')[0].classList.toggle('dark')
    document.getElementById('btn-toggle-dark-mode').innerText = darkModeEnabled ? 'light mode' : 'dark mode';
}