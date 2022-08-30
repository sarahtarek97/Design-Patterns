class Animal {
  constructor(name) {
    this.name = name;
  }

  makeSound() {
    console.log(`Generic Animal Sound!!`);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }

  makeSound() {
    super.makeSound();
    console.log("Woof!, Woof!!");
  }
}

const animal1 = new Animal("Don");
const animal2 = new Dog("Jeff");

animal1.makeSound();
animal2.makeSound();
