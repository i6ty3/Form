//using selectors inside the element
const questions = document.querySelectorAll('.question');

questions.forEach(function(xyz){
    const btn = xyz.querySelector('.question-btn');

    btn.addEventListener('click',function(){

        questions.forEach(function(abc){
            if (xyz!==abc){
                abc.classList.remove('show-text');
            }
        });

        xyz.classList.toggle('show-text');
    });
});



// traversing the dom

// const btnTog = document.querySelectorAll('.question-btn');

// btnTog.forEach(function(btn){
//     btn.addEventListener('click', function(a){
//         const showText = a.currentTarget.parentElement.parentElement;
//         showText.classList.toggle('show-text');
//     });
// });