const btns = document.querySelectorAll('.btn');
const content = document.querySelectorAll('.main');
const navHead = document.querySelector('.nav-header');

navHead.addEventListener('click',function(e){
    const typ = e.target.dataset.typ;
    if(typ){
        btns.forEach(function(btn){
            btn.classList.remove('active');
            e.target.classList.add('active');
        });
        content.forEach(function(article){
            article.classList.remove('main-show');
        });
        const element = document.getElementById(typ);
        element.classList.add('main-show');
    }
});

