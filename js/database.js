const back = document.querySelector('.js-back');
back.addEventListener('click', goBack);

function goBack() {
    window.history.back();
}

const retry = document.querySelector('.js-retryButton');
retry.addEventListener('click', retryPage);
function retryPage () {
    location.reload();
}

const passwordInputs = document.querySelectorAll('.js-password');
const showPasswordButtons = document.querySelectorAll('.js-hideorshowBtn');
const toggleHideImg = document.querySelectorAll('.js-toggleHideImg');

for (let i = 0; i < passwordInputs.length; i++) {
    showPasswordButtons[i].addEventListener('click', () => {
        passwordInputs[i].type = passwordInputs[i].type === 'password' ? 'text' : 'password';
        passwordInputs[i].placeholder = passwordInputs[i].type === 'password' ? '● ● ● ● ● ● ●' : 'password';
        toggleHideImg[i].src = passwordInputs[i].type === 'password' ? 'icons/hide.png' : 'icons/show.png';
    });
}

function createPhoneHandlers(titleClass, chevronClass, contentClass) {
    const advanced = {
        SectionTitle: document.querySelector(titleClass),
        Chevron: document.querySelector(chevronClass),
        Content: document.querySelector(contentClass),
    };

    advanced.SectionTitle.addEventListener('click', () => {
        advanced.Content.classList.toggle('advancedContent-active');
        advanced.Chevron.classList.toggle('chevron-active');
    });

    return advanced;
}

const advanced = createPhoneHandlers('.js-advancedTitle', '.js-chevron-advanced', '.js-advancedContent');

const databaseForm = document.querySelector('.js-databaseForm');
databaseForm.addEventListener('submit', submitDatabaseForm);
function submitDatabaseForm (e) {
    e.preventDefault();
    window.location.href = 'admin.html';
}