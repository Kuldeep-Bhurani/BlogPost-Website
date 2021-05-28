// Burger Icon
burger = document.querySelector('.burger')
navbar = document.querySelector('.navigation')
leftNav = document.querySelector('.left_nav')
rightNav = document.querySelector('.right_nav')

burger.addEventListener('click', () => {
    rightNav.classList.toggle('r-class')
    leftNav.classList.toggle('r-class')
    navbar.classList.toggle('r-nav')
    burger.classList.toggle('x-burger')
})

//ContactForm
function AnimatedForm() {
    const arrows = document.querySelectorAll('.fa-arrow-down');

    arrows.forEach(arrow => {
        arrow.addEventListener('click', () => {
            const input = arrow.previousElementSibling;
            const parent = arrow.parentElement;
            const nextForm = parent.nextElementSibling;

            //Check For Validation
            if (input.type === "text" && validateName(input)) {
                nextSlide(parent, nextForm);
            } else if (input.type === "number" && validatePhNum(input)) {
                nextSlide(parent, nextForm);
            } else if (input.type === "email" && validateEmail(input)) {
                nextSlide(parent, nextForm);
            } else {
                parent.style.animation = "shake 0.5s ease";
                alert('Something Is Wrong!!!')
            }
            parent.addEventListener('animationend', () => {
                parent.style.animation = "";
            })
        });
    });
}

function validateName(user) {
    if (user.value.length < 3) {
        console.log('Not enough characters');
        error('crimson');
    } else {
        error('rgb(39, 39, 39)');
        return true;
    }
}

function validatePhNum(num) {
    if (num.value.length < 3) {
        console.log('Phone number is not correct');
        error('crimson');
    } else if (num.value.length > 10) {
        console.log('Phone number is not correct');
        error('crimson');
    } else {
        error('rgb(39, 39, 39)');
        return true;
    }
}

function validateEmail(email) {
    const validation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (validation.test(email.value)) {
        error('rgb(39, 39, 39)');
        return true;
    } else {
        console.log('Email not put properly');
        error('crimson');
    }
}

function nextSlide(parent, nextForm) {
    parent.classList.add('inactive')
    parent.classList.remove('active')
    nextForm.classList.add('active')
    nextForm.classList.remove('inactive')
}

function error(color) {
    document.body.style.backgroundColor = color;
}

function FinalDetails() {
    const detail_arrow = document.querySelectorAll('.fa-arrow-right');

    detail_arrow.forEach(detarr => {
        detarr.addEventListener('click', () => {
            const parent = detarr.parentElement;
            const nextForm = parent.nextElementSibling;

            nextSlide(parent, nextForm);
            Add_name_details();
            Add_phnum_details();
            Add_mail_details();
        });
    });
}

function Add_name_details() {
    const name = document.querySelector('#name');
    const name_value = name.value
    const detail_name = document.querySelector('.detail_name');
    detail_name.innerHTML = name_value;
}

function Add_phnum_details() {
    const ph_num = document.querySelector('#ph_num');
    const ph_num_value = ph_num.value
    const detail_phnum = document.querySelector('.detail_phnum');
    detail_phnum.innerHTML = ph_num_value;
}

function Add_mail_details() {
    const mail = document.querySelector('#mail');
    const mail_value = mail.value
    const detail_mail = document.querySelector('.detail_mail');
    detail_mail.innerHTML = mail_value;
}

AnimatedForm();
FinalDetails();