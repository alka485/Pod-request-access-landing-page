submit.addEventListener('click', (e) => {
    e.preventDefault();
    
    if(email.value === ' ') {
        error.innerHtml = 'Oops! Please add your email';

    }
})