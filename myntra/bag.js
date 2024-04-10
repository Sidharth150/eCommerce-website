

let bagItems;
onload();
function onload() {
    loadBagItems();
    displayBagItems();
}


function loadBagItems() {
    console.log(bagItems);

    bagItemObjects = bagItems.map(itemid => {
        for (let i = 0; i < items.length; i++) {
            if (itemid == items[i].id) {
                return items[i];
            }
        }
    });
}

function displayBagItems() {
    let containerElement = document.querySelector('.bag-items-container');
    containerElement.innerHTML = '';

    bagItemObjects.forEach(item => {
        containerElement.innerHTML += generateItemHTML(item);
    });
}
function removeItem(itemId) {
    bagItems = bagItems.filter(id => id != itemId);
    localStorage.setItem('bagItems', JSON.stringify(bagItems));
    loadBagItems();
    displayBagItems();
    displayBagIcon();
    displayBagObjects();
}

function generateItemHTML(item) {
    return `
    <div class="bag-item-container">
        <div class="item-left-part">
            <img class="bag-item-img" src="${item.image}">
        </div>
        <div class="item-right-part">
            <div class="company">${item.company}</div>
            <div class="item-name">${item.item_name}</div>
            <div class="price-container">
                <span class="current-price">${item.current_price}</span>
                <span class="original-price">${item.original_price}</span>
        <span class="discount-percentage">(${item.discount_percentage}% OFF)</span>
            </div>
            <div class="return-period">
                <span class="return-period-days">${item.return_period} days</span> return available
            </div>
            <div class="delivery-details">
                Delivery by
                <span class="delivery-details-days">${item.delivery_date}</span>
            </div>
        </div>
        <div class="remove-from-cart" onclick="removeItems('${item.id}')">X</div>
    </div>
    `;
}



// Corrected spelling error in function name
