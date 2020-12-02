function person () {
    this.name = 'dhoni',
    this.age = 39
}
const person1 = new person();
const person2 = new person();
person.prototype.gender='male';
console.log(person.prototype);
console.log(person1.gender);
console.log(person2.gender);