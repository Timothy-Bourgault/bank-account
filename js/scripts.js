//business logic

function accounts (fullName, initDeposit) {
  this.fullName = fullName,
  this.initDeposit = initDeposit
  this.balances = [];
};


function balance (deposit, withdraw) {
  this.deposit = deposit,
  this.withdraw = withdraw,
  this.balance = 0
}

balance.prototype.math = function (total) {
  this.balance = this.initDeposit - this.withdraw + total
}

// balance.prototype.deposit = function(depositAmt) {
//   this.balance += depositAmt;
// }

// balance.prototype.withdraw = function(withdrawAmt) {
//   this.initDeposit -= withdrawAmt;
// }


// user interface logic
$(document).ready(function() {
  $("#register").submit(function(event) {
    var name = $("#name").val();
    var initialDeposit = $("#initialDeposit").val();

    var account = new accounts(name, initialDeposit);

    console.log(account.deposit);

    event.preventDefault();
  });

  $("#changeFunds").submit(function(event) {
    var depositAmt = parseInt($("#deposit").val());
    var withdrawAmt = parseInt($("#withdraw").val());

    if (depositAmt > 0) {
      deposit(depositAmt);
    } else if (withdrawAmt > 0) {
      withdraw(withdrawAmt);
    }

    console.log(depositAmt);

    event.preventDefault();
  });
});
