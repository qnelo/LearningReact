const Immutable = require('immutable');
const Cursor = require('immutable-cursor');

const data = Immutable.fromJS({ a: 1, b: 2 });

const cursor = Cursor.from(data, (nextValue, prevValue, keyPath) => {
    console.log('Value changed from', prevValue, 'to', nextValue, 'at', keyPath);
});

cursor.set('a', 2);
cursor.set('b', 3);
cursor.set('c', 5);

console.info(cursor.deref());
console.info('size:', cursor.size);
console.info('a:', cursor.get('a'));
console.info('b:', cursor.get('b'));
console.info('c:', cursor.get('c'));

let clone = data;

clone.c = { d: '9' };

console.info('clone:', clone);