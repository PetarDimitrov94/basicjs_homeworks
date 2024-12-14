// Exercise 04 Write a javascript function for an ATM

let accountMoney = 2000;
function howMuchMoneyDoYouWithdrawn() {
  let withdrawAmount = parseFloat(
    prompt("Please enter the amount you want to withdraw")
  );
  if (withdrawAmount > accountMoney) {
    return `Not enough money, you have ${accountMoney} on your account.`;
  } else {
    accountMoney -= withdrawAmount;
    return `You have withdraw ${withdrawAmount}, your remaining balance is ${accountMoney} `;
  }
}
console.log(howMuchMoneyDoYouWithdrawn());
