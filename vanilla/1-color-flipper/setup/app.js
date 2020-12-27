const colors = ["green", "red", "blue", "yellow", "black", "white"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function(){
	const randomNumber = Math.floor(Math.random()*colors.length);
	document.body.style.backgroundColor = colors[randomNumber];
	color.textContent = colors[randomNumber];
})