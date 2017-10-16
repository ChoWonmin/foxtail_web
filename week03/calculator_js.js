var result = "";
var value = 0;
var preValue = 0;
var operation = "";

var resultDiv = document.getElementsByClassName("result-text");
var cancelButton = document.getElementsByClassName("cancel");
var numButton = document.getElementsByClassName("number");
var opButton = document.getElementsByClassName("operation");

for(var i=0;i<numButton.length;i++)
	numButton[i].addEventListener("click", clickNum);

function clickNum(){
	if(result==="" && this.innerHTML==="0")
		resultDiv[0].innerHTML = "";
	else{				
		result += this.innerHTML;
		resultDiv[0].innerHTML = result;
	}
}

cancelButton[0].addEventListener("click", cancel);
function cancel(){
	result = "";
	resultDiv[0].innerHTML = "";
	value = 0;
	preValue = 0;
	operation = "";
}

for(var i=0;i<numButton.length;i++)
	opButton[i].addEventListener("click", clickOperation);

function clickOperation(){
	value = result;
	
	if(operation=="+")
		result = parseInt(preValue) + parseInt(value);
	else if(operation=="-")
		result = preValue - value;
	else if(operation=="X")
		result = preValue * value;
	else if(operation=="÷"){
		result = preValue / value;
		result = Math.round(result);
	}

	preValue = result;
	operation = this.innerHTML;

	resultDiv[0].innerHTML = result;
	if(this.innerHTML!="=")
		result = "";
}
