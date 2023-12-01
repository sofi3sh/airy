const input = document.querySelector("#phone");
input.value = '+1';

const back = document.querySelector('.js-back');
back.addEventListener('click', goBack);

function goBack() {
    window.history.back();
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

function createAdvancedHandlers(titleClass, contentClass) {
    const advanced = {
        SectionTitle: document.querySelector(titleClass),
        Content: document.querySelector(contentClass),
    };

    advanced.SectionTitle.addEventListener('click', () => {
        advanced.Content.classList.toggle('phoneList-active');
    });

    return advanced;
}

const advanced = createAdvancedHandlers('.js-phoneCountry', '.js-phoneList');

const adminForm = document.querySelector('.js-adminForm');
adminForm.addEventListener('submit', submitAdminForm);
function submitAdminForm (e) {
    e.preventDefault();

    function isValidEmail(email) {
        const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        return emailRegex.test(email);
    }

    const emailInput = adminForm.querySelector('[name="email"]');
    const email = emailInput.value;
    const errorEmail = document.querySelector('.js-errorMessageEmail');

    if (!isValidEmail(email)) {
        emailInput.style.border = '1.3px #FF9494 solid';
        emailInput.style.color = '#FF3939';
        errorEmail.textContent = 'Wrong email format';
        return;
    }

    const passwordInput = adminForm.querySelector('[name="password"]');
    const confirmPasswordInput = adminForm.querySelector('[name="confirmPassword"]');
    const errorPassword = document.querySelector('.js-errorMessagePassword');

    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    if (password !== confirmPassword) {
        passwordInput.style.border = '1.3px #FF9494 solid';
        confirmPasswordInput.style.border = '1.3px #FF9494 solid';
        errorPassword.textContent = 'Passwords do not match';
        passwordInput.value = '';
        confirmPasswordInput.value = '';
        return;
    }
    window.location.href = 'modules.html';
}