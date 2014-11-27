(function(){
	var app = angular.module('machine', []);
	app.controller("CalculatorController", function(){

		this.display = "0";
		this.number = "0";
		this.total = "0";
		this.operator = "";

		this.setNumber = function(number){
			if(this.number === "0")
			{
				this.number = number.toString();
			}
			else
			{
				this.number += number.toString();
			}
			this.display = this.number;
		};

		this.setOperator = function(operator){
			if(this.total === "0")
			{
				this.total = this.number;
			} else if(this.total !== 0 && this.number !== 0) {
				this.total = doOpperation(this.total, this.operator, this.number);
				this.display = this.total;
			}
			this.operator = operator;
			this.number = "0";
		};

		this.getResult = function(){
			this.total = doOpperation(this.total, this.operator, this.number);
			this.display = this.total;
			this.number = 0;
			this.operator = "";
		};

		this.reset = function(){
			this.operator = "";
			this.number = "0";
			this.total = "0";
			this.display = "0";
		};


		var doOpperation = function(firstNumber, operator, secondNumber){
			switch(operator){
				case "+":
					return parseInt(firstNumber) 
						+ parseInt(secondNumber);
					break;
				case "-":
					return parseInt(firstNumber) 
						- parseInt(secondNumber);
					break;
				case "*":
					return parseInt(firstNumber) 
						* parseInt(secondNumber);
					break;
				case "/":
					return parseInt(firstNumber) 
						/ parseInt(secondNumber);
					break;
				default:
					alert("calcul error");
			}
		};
	});
})();

