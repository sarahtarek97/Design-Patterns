function Employee(name, age, baseSalary) {
  this.name = name;
  this.age = age;
  this.baseSalary = baseSalary;

  let monthlyBonus = 1000;

  let calculateFinalSalary = function () {
    let finalsalary = baseSalary + monthlyBonus;
    console.log(`Final Salary is: ${finalsalary}`);
  };

  this.getEmpDetails = function () {
    console.log(`Name: ${this.name} | Age: ${this.age}`);
    calculateFinalSalary();
  };
}

let emp1 = new Employee("John", 30, 2000);
emp1.getEmpDetails();
