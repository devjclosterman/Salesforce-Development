//objects of one individual dog

let rufus = {
    name: "Rufus",
    birthday: "2/1/2017",
    age: function() {
        return Date.now() - this.birthday;
    },
    attendance: 0
}

// object of second individual dog

let fluffy = {
    name: "Fluffy",
    birthday: "1/12/2019",
    age: function() {
        return Date.now() - this.birthday;
    },
    attendance: 0
}

class Dog {
    
    constructor(name, birthday) {
        this.name;
        this.birthday;
    }

    //Declare private varaiable
    _attendance = 0;

    getAge() {
        //Getter
        return this.calcAge();
    }
    calcAge() {
        //calculate age using todays date and birthday
        return Date.now() - this.birthday;
    }
    bark() {
        return console.log("Woof!");
    }
    updateAttendance() {
        //add a day to the dog's 
        //attendance days at the petsitter's
        this._attendance++;
    }
};

// instantiate a new object of the dog class, 
// and individual dog named rufus
const rufus = new Dog("Rufus", "2/1/2017");

class Dog {
    //Declare protected (private) fields
    _attendance = 0;

    constructor(name, birthday) {
        this.name;
        this.birthday;
    }
    getAge() {
    //Getter
    return this.calcAge();
    }

    calcAge() {
        //calculate age using today's date and birthday
        return this.calcAge();
    }
        bark() {
            return console.log("Woof!");
        }
        updateAttendance() {
            //add a day to the dog's attendance days at the petsitter's
            this._attendance++;
        }
    }
/*
-Inheritance: child class inherits data
and behaviors from the parent class
-Encapsulation: containing information in an object,
exposing only selected information
-Abstraction: only exposing high-level
public methods for accessing an object
-Polymorphism: many methods can do the same task
*/


//Parent class Dog
class Dog{
    //Declare protected (private) fields
    _attendance = 0;

    constructor(name, birthday) {
        this.name = name;
        this.birthday = birthday;
    }

    getAge() {
        //Getter
        return this.calcAge();
    }

    calcAge() {
        //calculate age using today's date and birthday
        return this.calcAge();
    }

    bark() {
        return console.log("Woof!");
    }

    updateAttendance() {
        //add a day to the dog's attendance days at the petsitters
        this._attendance++;
    }
}

//Child class HerdingDog, inherits from parent Dog
class HerdingDog extends Dog {
    constructor(name, birthday) {
        super(name);
        super(birthday);
    }

    herd() {
        //additional method for HerdingDog child class
        return console.log("Stay together!")
    }
}

//The parents are also known as superclasses
//The children are also known as subclasses

/*
Inheritance is also known as prototyping
*/

// Encapsulation means containing all 
// important information inside an object

