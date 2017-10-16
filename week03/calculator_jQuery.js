var result = "";
var value = 0;
var preValue = 0;
var operation = "";

$(".number").click(function(){
	if(result==="" && this.innerHTML==="0")
		$(".result-text").html("");
	else{				
		result += this.innerHTML;
		$(".result-text").html(result);
	}
});

$(".cancel").click(function(){
	result = "";
	$(".result-text").html("");
	value = 0;
	preValue = 0;
	operation = "";
});

$(".operation").click(function(){
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

	$(".result-text").html(result);
	if(this.innerHTML!="=")
		result = "";
});
