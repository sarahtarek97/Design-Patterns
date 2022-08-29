class User {
  #eSalary;

  constructor(id, userName, eSalary) {
    this.id = id;
    this.userName = userName;
    this.#eSalary = eSalary;
  }

  getSalary() {
    return parseInt(this.#eSalary);
  }
}

let userOne = new User(100, "test1", "5000 LE");
console.log(userOne.getSalary());
