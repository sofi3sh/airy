const languageBtn = document.querySelector('.js-languageBtn');
const languageList = document.querySelector('.js-languageList');
const languageListItems = document.querySelectorAll('.languageList li');

languageBtn.addEventListener('click', () => {
    languageList.classList.toggle('languageList-active');
});

languageListItems.forEach((li) => {
    li.addEventListener('click', () => {
        languageBtn.querySelector('p').textContent = li.querySelector('p').textContent;
        languageListItems.forEach((item) => {
            const icon = item.querySelector('img');
            if (icon) {
                item.removeChild(icon);
            }
        });
        const selectedIcon = document.createElement('img');
        selectedIcon.src = 'icons/check.png';
        selectedIcon.alt = 'check';
        li.appendChild(selectedIcon);
        languageList.classList.remove('languageList-active');
    });
});



