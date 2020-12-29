const show = document.querySelector(".overlay");
const about = document.querySelector(".about");

about.addEventListener('click', function(){
	show.classList.toggle("show");
});

// --------------------------------------------------
let count = 0;

const increase = document.querySelector('.in');
const decrease = document.querySelector('.de');
const quant = document.querySelector('#count');

const price = document.querySelector('.price');
const unit = document.querySelector('.pr');

increase.addEventListener('click',function(){
	count++;
	quant.innerHTML=count;
	changePrice(quant);
});
decrease.addEventListener('click',function(){
	if	(count==0){
		count=0;
	}else{
		count--;
	}
	quant.innerHTML=count;
	changePrice(quant);
});

// ------------------------
function changePrice(xyz){
	price.innerHTML= unit.textContent*xyz.textContent;
};
