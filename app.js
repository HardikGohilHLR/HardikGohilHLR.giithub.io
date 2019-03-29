const temp_value = document.querySelector("#get_temp");

let fehrenhit_value = document.querySelector("#fehrenhit-value");
let kelvin_value = document.querySelector("#kelvin-value");
let rankine_value = document.querySelector("#rankine-value");

document.querySelector('body').addEventListener('onload',function(){
	fehrenhit.style.display = "none";
});

temp_value.addEventListener('input',function(e){
	let temp = e.target.value;

	document.querySelector("#fehrenhit-card").style.display = 'block';
	document.querySelector("#kelvin-card").style.display = 'block';
	document.querySelector("#rankine-card").style.display = 'block';
	if(temp === null || temp === ''){
		temp = 0;
	}
	fehrenhit_value.textContent = (temp * 9/5) + 32;
	
	let kelvin = parseInt(temp) + 273.15;
	
	kelvin_value.textContent = kelvin;	

	let rankine = temp * 9/5 + 491.67;
	rankine_value.textContent = rankine.toFixed(2);	
});
