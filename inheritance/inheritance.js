class User {
  constructor(id, username) {
    this.id = id;
    this.username = username;
  }

  sayHello() {
    return `Hello ${this.username}`;
  }
}

class Admin extends User {
  constructor(id, username, permissions) {
    super(id, username);
    this.permissions = permissions;
  }
}

class SuperAdmin extends Admin {
  constructor(id, username, permissions, ability) {
    super(id, username, permissions);
    this.ability = ability;
  }
}

let adminOne = new Admin(1001, "Johnas", 1);
console.log(adminOne.sayHello());

let superAdmin = new SuperAdmin(1002, "Ali", 1, "DB Admin");
console.log(superAdmin.sayHello());
