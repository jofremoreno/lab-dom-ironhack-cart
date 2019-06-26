function deleteItem(event) {}

function getPriceByProduct() {}

function updatePriceByProduct(productPrice, index) {}

function getTotalPrice() {
  let getPricePerProduct = document.getElementsByClassName("price")[0]
    .innerText;
  getPricePerProduct.onclick = function() {
    let input = document.getElementsByTagName("input")[0];
    console.log(input.value);
  };
}

function createQuantityInput() {}

function createDeleteButton() {}

function createQuantityNode() {}

function createItemNode(dataType, itemData) {}

function createNewItemRow(itemName, itemUnitPrice) {}

function createNewItem() {}

window.onload = function() {
  var calculatePriceButton = document.getElementById("calc-prices-button");
  var createItemButton = document.getElementById("new-item-create");
  var deleteButtons = document.getElementsByClassName("btn-delete");

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem;
  }
};
