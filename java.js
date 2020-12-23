function updateRangeInput(inp) {
          document.getElementById('rangeInput').innerHTML=inp; 
        }
function updatePrice(inp){
	let	unitprice=500;
	price=inp*unitprice;
	document.getElementById('fprice').innerHTML=price;
}
function saveIt(){
	let	name = document.getElementById('fname').value;
	let	email = document.getElementById('femail').value;
	let	phone = document.getElementById('fphone').value;
	let	password = document.getElementById('fpass').value;
	let	quantity = document.getElementById('fquantity').value;
	var dat = new Blob([`name:${name} \n\ email:${email} \n\ phone:${phone} \n\ password:${password} \n\ quantity:${quantity}`],{ type: "text/plain;charset=utf-8" });
	saveAs(dat, "saved.txt");
}