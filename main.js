const { LinkedList } = require('./linkedList');

const list = new LinkedList();

list.append('dog');
list.append('cat');
list.append('parrot');
list.append('hamster');
list.append('snake');
list.append('turtle');

console.log('Lista inicial:');
console.log(list.toString());

console.log('\nTamaño:', list.size());
console.log('Head:', list.head() ? list.head().value : null);
console.log('Tail:', list.tail() ? list.tail().value : null);
console.log('Elemento en índice 2:', list.at(2) ? list.at(2).value : null);

console.log('\nContiene "cat"?', list.contains('cat'));
console.log('Índice de "snake":', list.find('snake'));

console.log('\nPop ->', list.pop() ? list.pop().value : null);
console.log('Después de pop:', list.toString());

console.log('\nInsertar "fox" en índice 2');
list.insertAt('fox', 2);
console.log(list.toString());

console.log('\nRemover índice 3');
list.removeAt(3);
console.log(list.toString());

console.log('\nPrepend "wolf"');
list.prepend('wolf');
console.log(list.toString());
