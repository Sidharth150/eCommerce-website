 
 let bagItems =[];
 onload ();

 function onload(){
    let bagItemsStr =localStorage.getItem('bagItems');
    bagItems =bagItemsStr ? JSON.parse(bagItemsStr):[];

displayItemsonHomePage();
displayBagIcon();
}


function addToBag(itemId) {
    bagItems.push(itemId);
    localStorage.setItem('bagItems', JSON.stringify(bagItems));
    displayBagIcon();
}
function displayBagIcon(){

    let bagItemCountElement = document.querySelector('.bag-item-count');
    if (bagItems.length > 0) {
        bagItemCountElement.style.visibility = 'visible';
        bagItemCountElement.innerText = bagItems.length;
    } else {
        bagItemCountElement.style.visibility = 'hidden';
    }
    

    bagItemCountElement.innerHTML =bagItems.length;
}

function displayItemsonHomePage(){

    let itemsContainerElement =document.querySelector('.items-container');
  if (!itemsContainerElement ){
    return;
  }
    let innerHTML = '';
     items.forEach(item => {
        innerHTML +=
        `
    <div class="items-container">
    <div class="iten">
        <img class="image" src="${item.image}" alt="t-shirt" >
        <div class="rating">
           ${item.rating.stars} ⭐| ${item.rating.count}
        </div>
        <div class="company-name">
            ${item.company}
        </div>
        <div class="item-name">
             ${item.item_name}
            
        </div>
        <div class="price">
            <span class="current-price"> Rs ${item.current_price}</span>
            <span class="original-price">Rs ${item.original_price}</span>
            <span class="discount"> (${item.discount_percentage}% off)</span>
        </div>
        <button class="btn-add-bag" onclick="addToBag (${item.id})"> Add to Bag </button>
    </div>
    </div>
    
    ` ;
     }); 
    itemsContainerElement.innerHTML = innerHTML;

}

  

// let itemsContainerElement =document.querySelector('.items-container');

// let innerHTML = '';
//  items.forEach(item => {
//     innerHTML +=
//     `
// <div class="items-container">
// <div class="iten">
//     <img class="image" src="${item.image}" alt="t-shirt" >
//     <div class="rating">
//        ${item.rating.stars} ⭐| ${item.rating.count}
//     </div>
//     <div class="company-name">
//         ${item.company}
//     </div>
//     <div class="item-name">
//          ${item.item_name}
        
//     </div>
//     <div class="price">
//         <span class="current-price"> Rs ${item.current_price}</span>
//         <span class="original-price">Rs ${item.original_price}</span>
//         <span class="discount"> (${item.discount_percentage}% off)</span>
//     </div>
//     <button class="btn-add-bag" onclick="addToBag"> Add to Bag </button>
// </div>
// </div>

// ` ;
//  }); 
// itemsContainerElement.innerHTML = innerHTML;






/* <div class="items-container">
<div class="iten">
   <img class="image" src="${item.item_image}" alt="t-shirt" >
  <div class="rating">
      ${item.rating.stars} ⭐| ${item.rating.noOfReviews}
    </div>
    <div class="company-name">
            ${item.company_name}
     </div>
     <div class="item-name">
         ${item.item_name}
        
   </div>
   <div class="price">
        <span class="current-price"> Rs ${item.current_price}</span>
    <span class="original-price">Rs ${item.original_price}</span>
     <span class="discount"> (${item.discount_price}% off)</span>
   </div>
    <button class="btn-add-bag"> Add to Bag </button>
     </div>
 </div>
 ; */