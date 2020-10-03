import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const numbersCollection = new NumbersCollection([-2, -12, 2, 0, 10, -5]);
numbersCollection.sort();
console.log(numbersCollection.data);
// const charactersCollection = new CharactersCollection('jhonnAtha');

// const sorterNumbers = new Sorter(numbersCollection);
// const sorterString = new Sorter(charactersCollection);
// sorterNumbers.sort();
// sorterString.sort();
// console.log(sorterNumbers.collection);
// console.log(sorterString.collection);

// const linkedList = new LinkedList();
// linkedList.add(500);
// linkedList.add(-6);
// linkedList.add(19);

// const sorter = new Sorter(linkedList);
// sorter.sort();
// linkedList.print();
