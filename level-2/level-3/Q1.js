//Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description.
const personAccount = {
  firstname: "",
  lastname: "",
  incomes: new Map(),     // Using Map to store income descriptions and amounts
  expenses: new Map(),    // Using Map to store expense descriptions and amounts
  
  // Method to calculate total income
  totalIncome: function() {
    let total = 0;
    for (const amount of this.incomes.values()) {
      total += amount;
    }
    return total;
  },
  
  // Method to calculate total expenses
  totalExpense: function() {
    let total = 0;
    for (const amount of this.expenses.values()) {
      total += amount;
    }
    return total;
  },
  
  // Method to get account information
  accountInfo: function() {
    return `Name: ${this.firstname} ${this.lastname}\nTotal Income: ${this.totalIncome()}\nTotal Expense: ${this.totalExpense()}\nAccount Balance: ${this.accountBalance()}`;
  },
  
  // Method to add an income
  addIncome: function(description, amount) {
    this.incomes.set(description, amount);
  },
  
  // Method to add an expense
  addExpense: function(description, amount) {
    this.expenses.set(description, amount);
  },
  
  // Method to calculate account balance
  accountBalance: function() {
    return this.totalIncome() - this.totalExpense();
  }
};
personAccount.firstname = "John";
  personAccount.lastname = "pual";
  
  personAccount.addIncome("Salary", 50000);
  personAccount.addIncome("Freelance", 5500);
  
  personAccount.addExpense("Rent", 10000);
  personAccount.addExpense("Groceries", 3000);
  
  console.log(personAccount.accountInfo());