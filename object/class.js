class Launch {
  constructor(name = "Unkonw", value = 0) {
    this.name = name;
    this.value = value;
  }
}

class FinancialCycle {
  constructor(month, year) {
    this.month = month;
    this.year = year;
    this.launches = [];
  }

  addLaunch(...launches) {
    launches.forEach((l) => this.launches.push(l));
  }

  summary() {
    let sumValues = 0;
    this.launches.forEach((l) => {
      sumValues += l.value;
    });
    return sumValues;
  }
}

const salary = new Launch("Salary", 10000);
const tax = new Launch("Tax", -2000);

const accounts = new FinancialCycle(3, 2024);
accounts.addLaunch(salary, tax);
console.log(accounts.summary());
