const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            console.log("Interesecting")
            entry.target.id = 'show';
        } else {
            console.log("nnot")
            entry.target.id = 'hidden';
        }
    });
});

const elements = document.querySelectorAll('#hidden');
elements.forEach(element => {
    observer.observe(element);
});
