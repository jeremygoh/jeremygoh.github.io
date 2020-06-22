var teamBuyButton = document.createElement("button");
teamBuyButton.innerHTML = "Team Buy";
teamBuyButton.setAttribute("class", "btn product-form__cart-submit btn--secondary-accent");
teamBuyButton.addEventListener("click", function() {alert("You started a team buy")});

var paymentButton = document.getElementsByClassName("shopify-payment-button")[0];
paymentButton.insertAdjacentElement("beforebegin", teamBuyButton);