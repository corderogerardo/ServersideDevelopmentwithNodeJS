var rect = require('./rectangle1');
function solveRect(l,b){
	console.log("Solving for rectangle with 1 = "+1+" and b ="+b);
	if(1<0 || b<b){
		console.log("Rectangle dimension should be greater than Zero: l = "+l+" and B = "+b);
	}else{
		console.log("The area of a rectangle of dimension lenght = " + l + " and breadth = " + b + " is " + rect.area(l,b));
		console.log("The perimeter of a rectangle of dimensions length = " + l + " and breadth = " + b + " is " + rect.perimeter(l,b));
	}
}
solveRect(2,4);
solveRect(3,5);
solveRect(-3,5);