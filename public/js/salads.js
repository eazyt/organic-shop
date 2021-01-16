//GLOBAL
var products = [];
var cartItems = [];
var cart_n = document.getElementById('cart_n');

//DIVs
var fruitDIV = document.getElementById('fruitDIV')
var juiceDIV = document.getElementById('juiceDIV')
var saladDIV = document.getElementById('saladDIV')

//INFORMATION

var SALAD = [
  { name: 'Greek Salad', price: 5 },
  { name: 'Moroccain Salad', price: 15 },
  { name: 'Malwain Salad', price: 2 },
  { name: 'Orange Fruit Salad', price: 13 },
  { name: 'Grapes Salad', price: 5 },
  { name: 'Kiwi Salad', price: 15 },
  { name: 'Pears Salad', price: 2 },
  { name: 'Tomato Salad', price: 13 },
  { name: 'Italian Tomotos Salad', price: 13 },
];

//HTML
function HTMLsaladProduct(con) { 
  // let URL = `../img/salads/salad${con}.jpg`;
  let URL = `/public/img/salads/salad${con}.jpg`;
  let btn = `btnSalad${con}`;
  return `
      <div class="col-md-4 shadow-sm">
        <img class="card-img-top" style="height:16rem;" src="${URL}" alt="Card image cap">
          <div class="card-body">
            <i style="color:orange;" class="fa fa-star"></i>
            <i style="color:orange;" class="fa fa-star"></i>
            <i style="color:orange;" class="fa fa-star"></i>
            <i style="color:orange;" class="fa fa-star"></i>
            <i style="color:orange;" class="fa fa-star"></i>
            <p class="card-text">${SALAD[con - 1].name}</p>
            <p class="card-text">Price: $ ${SALAD[con - 1].price}.00</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">

                <button id='${btn}'type="button" onclick="cart('${SALAD[con - 1].name}','${SALAD[con - 1].price}', '${URL}','${con}','${btn}')" class="btn btn-sm btn-outline-secondary">
                Add to Cart 
                </button>

              </div>
              <small class="text-muted"> Free shipping </small>
            </div>
          </div>
      </div>
  `
}

//Animation
function animation() { 
  var toast = swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 1000
  });
  toast({
    type: 'success',
    title: 'Added to shopping cart'
  });
}

//CART FUNCTIONS
function cart(name, price, url, con, btncart) { 
  var item = {
    name: name,
    price: price,
    url:url
  }
  cartItems.push(item);
  let storage = JSON.parse(localStorage.getItem('cart'));
  if (storage == null) {
    products.push(item);
    localStorage.setItem('cart', JSON.stringify(products));
  } else { 
    products = JSON.parse(localStorage.getItem('cart'));
    products.push(item);
    localStorage.setItem('cart', JSON.stringify(products))
  }
  products = JSON.parse(localStorage.getItem('cart'));
  cart_n.innerHTML = `[${products.length}]`;
  document.getElementById(btncart).style.display = "none";
  animation();
}



(() => { 

  for (let index = 1; index <= 9; index++ ) { 
    saladDIV.innerHTML += `${HTMLsaladProduct(index)}`
  }
  if (localStorage.getItem('cart') == null) {

  } else { 
    products = JSON.parse(localStorage.getItem('cart'));
    cart_n.innerHTML = `[${products.length}]`
  }
})();
