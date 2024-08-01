document.addEventListener('DOMContentLoaded', function () {
    const userLang = navigator.language || navigator.userLanguage;
    const menu = document.getElementById('menu');
    const rtlLangs = ['ar', 'he', 'fa', 'ur'];
    
    if (rtlLangs.some(lang => userLang.startsWith(lang))) {
        document.body.style.direction = 'rtl';
        menu.classList.add('right');
    } else {
        document.body.style.direction = 'ltr';
        menu.classList.add('left');
    }
});