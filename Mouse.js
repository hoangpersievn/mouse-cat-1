function Mouse(name, color) {
	this.name = name;
	this.color = color;
	this.die = false;
};

Mouse.prototype.died = function() {
	this.die = true;
};

module.exports = Mouse;
