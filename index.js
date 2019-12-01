const Mouse = require('./Mouse.js');
const Cat = require('./Cat.js');

let tom = new Mouse('Tom', 'green');
let jerry = new Cat('Jerry', 'blue');

jerry.eat(tom);
tom.died();

console.log(jerry);
