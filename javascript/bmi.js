function bmiCalculator(weight, height){
var bmi = Math.floor(weight / (height*height)); //floor or round
return bmi;
}

bmiCalculator(65, 1.8);
