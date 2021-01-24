
const john = {
    firstName: 'John',
    lastName: 'Williams',
    birthYear: 1996,
    job: 'student',

    friends: ['Mike', 'Jack', 'Peter'],

    calcAge: function () {
        this.age = 2021 - this.birthYear;
        return this.age;
    },
    hasDriverLicense: function () {
        return (this.age >= 16) ? true : false;
    },
    //PART: B
    getSummary: function () {
        return `${this.firstName} ${this.lastName} is ${this.calcAge()} years old, and he ${this.hasDriverLicense() ? 'has' : 'does not have'} a driver's license.`;

    }
}

//PART A: 
console.log(`${john.firstName} has ${john.friends.length} friends, and his best friend is called ${john.friends[1]}`);
console.log(john.getSummary());

//PART C: 
const openbtn = document.querySelectorAll('.but');
const close = document.querySelector('.clsbtn');

const openModal = function () {
    document.getElementById('open').style.opacity = 1;
}
const closeModal = function () {
    document.getElementById('open').style.opacity = 0;
}
for (let i = 0; i < openbtn.length; i++) {
    btnOpen[i].addEventListener('click', openModal)
}


clsbtn.addEventListener('click', closeModal);


