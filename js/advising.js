$('.active').each(function(index) {
    this.classList.remove('active');
});

if (document.URL.includes('home')){
    document.querySelector('#home').classList.add('active');
} else if (document.URL.includes('what-advisors-do')) {
    document.querySelector('#what-advisors-do-tab').classList.add('active');
} else if (document.URL.includes('make-an-appointment')){
    document.querySelector('#make-an-appointment-tab').classList.add('active');
} 