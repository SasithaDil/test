const name = 'Sasitha';
let age = 22;
const hasHobbies = true;

age = 33;

const summarizeData = (userName, userAge, userHasHobbies)=> {
    return ('Namr is : ' + userName + 'Age is : ' + userAge + 'User has hobbies : ' + userHasHobbies);
}
//------------------------------------------------------------------------
const add = (a,b) => a+b;

const addOne = a => a+1;


console.log(addOne(2));
console.log(add(1,2));
////
//-----------------------------------------------------------------------
console.log(summarizeData(name,age, hasHobbies));

const person = {
    name: 'ssss',
    age: 12,

    geee() {
        console.log('hi I am ' + this.name);
    }
};
person.geee();

const hobbies = ['aaa','ssss'];
//------------------------------------------------
for(let hobby of hobbies){
    console.log(hobby);

}
console.log(hobbies.map(hobby => 'Hobby'+hobby));
console.log(hobbies);
//-----------------------------------------------
hobbies.push('prog','fffff');
hobbies.pop();
console.log(hobbies);
