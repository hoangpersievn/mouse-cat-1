function Cat(name, color) {
	this.name  = name;
	this.color = color;
	this.tomach = [];
};

Cat.prototype.eat = function(mouse) {
	this.tomach.push(mouse);
};

module.exports = Cat;
