// Write your solution here!
//create a cats array
const cats = ["Milo", "Otis", "Garfield"];
console.log(cats);

// appends a cat to the end of the cats array
function destructivelyAppendCat(name){
    cats.push(name);
    return cats;
};
console.log(destructivelyAppendCat('Peaches'));

//prepends a cat to the beginning of the cats array
function  destructivelyPrependCat(name){
    cats.unshift(name);
    return cats;
};
console.log(destructivelyPrependCat('Olive'));

//removes the last cat from the cats array
function destructivelyRemoveLastCat(){
    cats.pop();
    return cats;
};
console.log(destructivelyRemoveLastCat());
console.log(cats);

//removes the first cat from the array
function destructivelyRemoveFirstCat() {
    cats.shift();
    return cats;

};
console.log(destructivelyRemoveFirstCat());
console.log(cats);

//appends a cat to the cats array and returns a new array, leaving the cats array unchanged
function  appendCat(name){
    return [...cats, name];
};
const newCatList = appendCat("Luna");
console.log(newCatList);
console.log(cats);

// prepends a cat to the cats array and returns a new array, leaving the cats array unchanged
function  prependCat(name){
    return [name, ...cats];
};
const newCatList2 = prependCat("Dora");
console.log(newCatList2);
console.log(cats);

//removes the last cat in the cats array and returns a new array, leaving the cats array unchanged
function removeLastCat() {
    return cats.slice(0, -1);
};
const newCatList3 = removeLastCat();
console.log(newCatList3);
console.log(cats);

//removes the first cat from the cats array and returns a new array, leaving the cats array unchanged
function removeFirstCat(){
    return cats.slice(1);
};
console.log(cats);
