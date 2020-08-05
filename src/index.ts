import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollections } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const collection = new NumbersCollection([10, 0, -5, 3, -99]);

collection.sorter();

console.log(collection.data);

const charCollection = new CharactersCollections('XZedcba');

charCollection.sorter();

console.log(charCollection);

const linkedList = new LinkedList();
linkedList.add(5);
linkedList.add(10);
linkedList.add(-12);
linkedList.add(0);
linkedList.add(4);
linkedList.add(-100);
linkedList.add(8);
linkedList.add(666);

linkedList.sorter();

linkedList.print();
