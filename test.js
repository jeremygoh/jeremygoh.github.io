function getButtonToCopy() {
  var addToCartForm = document.querySelectorAll('form[action="/cart/add"]');
  if (addToCartForm.length === 0) {
    console.log("no add to cart form");
    return null;
  }

  addToCartForm = addToCartForm[0];

  var buttons = addToCartForm.getElementsByTagName("button");
  if (buttons.length === 0) {
    console.log("no buttons to copy");
    return null;
  }
  return buttons[0];
}

var button = getButtonToCopy();

var teamBuyButton = document.createElement("button");
teamBuyButton.innerHTML = "Buy With Friends";

teamBuyButton.addEventListener("click", function (e) {
  e.preventDefault();
  alert("You started a team buy");
});

var paymentButton = document.getElementsByClassName(
  "shopify-payment-button"
)[0];
teamBuyButton.style.cssText = window.getComputedStyle(button, null).cssText;

paymentButton.insertAdjacentElement("beforebegin", teamBuyButton);
