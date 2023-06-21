var subscriptionRadio = document.getElementById("calendly-subscription");
var freeRadio = document.getElementById("free-calendly");
var oneAdditionalLanguage = document.getElementById("one-additional-language");
var twoAdditionalLanguage = document.getElementById("two-additional-language");
var threeAdditionalLanguage = document.getElementById(
  "three-additional-language"
);
var fourAdditionalLanguage = document.getElementById(
  "four-additional-language"
);
var fiveAdditionalLanguage = document.getElementById(
  "five-additional-language"
);

subscriptionRadio.on("click", function () {
  updateTotalAmount();
});

freeRadio.on("click", function () {
  updateTotalAmount();
});

oneAdditionalLanguage.on("click", function () {
  updateTotalAmount();
});

twoAdditionalLanguage.on("click", function () {
  updateTotalAmount();
});

threeAdditionalLanguage.on("click", function () {
  updateTotalAmount();
});

fourAdditionalLanguage.on("click", function () {
  updateTotalAmount();
});

fiveAdditionalLanguage.on("click", function () {
  updateTotalAmount();
});

function updateTotalAmount() {
  var amount = 0;

  if (subscriptionRadio.checked || freeRadio.checked) {
    amount = 500;
  }

  if (oneAdditionalLanguage.checked) {
    amount += 500;
  }

  if (twoAdditionalLanguage.checked) {
    amount += 1000;
  }

  if (threeAdditionalLanguage.checked) {
    amount += 1500;
  }

  if (fourAdditionalLanguage.checked) {
    amount += 2000;
  }

  if (fiveAdditionalLanguage.checked) {
    amount += 2500;
  }

  totalAmount.textContent = amount;
}
