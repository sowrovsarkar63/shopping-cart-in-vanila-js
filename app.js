// handle product number
function updateProductNumber(product, price, isincreasing) {
  const productInput = document.getElementById(product + "-number");
  let ProductNumber = productInput.value;
  // check true false
  if (isincreasing) {
    ProductNumber = parseInt(ProductNumber) + 1;
  } else if (ProductNumber > 0) {
    ProductNumber = parseInt(ProductNumber) - 1;
  }
  productInput.value = ProductNumber;

  //   case total
  const caseTotal = document.getElementById(product + "-total");
  caseTotal.innerText = ProductNumber * price;
  calculateTotal();
}
function getInputvalue(product) {
  const productInput = document.getElementById(product + "-number");
  const ProductNumber = parseFloat(productInput.value);
  return ProductNumber;
}

function calculateTotal() {
  const phoneTotal = getInputvalue("phone") * 1219;
  const caseTotal = getInputvalue("case") * 59;
  const subTotal = phoneTotal + caseTotal;
  const tax = subTotal / 10;
  const totalPrice = subTotal + tax;
  // update on html
  document.getElementById("sub-total").innerText = subTotal;
  document.getElementById("total-tax").innerText = tax;
  document.getElementById("total-sale").innerText = totalPrice;
}
/*====================
phone increase decrease events
=========================
 */
document.getElementById("phone-plus").addEventListener("click", function () {
  updateProductNumber("phone", 1219, true);
});

document.getElementById("phone-minus").addEventListener("click", function () {
  updateProductNumber("phone", 1219, false);
});

/* ++++++++++++++++++++++++++++++++++++
handle case increase decrease events
++++++++++++++++++++++*/
document.getElementById("case-plus").addEventListener("click", function () {
  updateProductNumber("case", 59, true);
});

document.getElementById("case-minus").addEventListener("click", function () {
  updateProductNumber("case", 59, false);
});
