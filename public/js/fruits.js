//GLOBAL
var products = [];
var cartItems = [];
var cart_n = document.getElementById('cart_n');

//DIVs
var fruitDIV = document.getElementById('fruitDIV')
var juiceDIV = document.getElementById('juiceDIV')
var saladDIV = document.getElementById('saladDIV')

//INFORMATION

var FRUIT = [
  { name: 'Bananas', price: 2 },
  {
    name: 'Papaya',
    price: 12
  },
  { name: 'Peaches', price: 3},
  { name: 'Watermelon', price: 11 },
  { name: 'Granite', price: 10 },
  { name: 'WatermelonXL', price: 21 },
  { name: 'Cherry', price: 13 },
  { name: 'Strawberry', price: 19 },
  { name: 'Oranges', price: 10 },
  { name: 'Strawberry', price: 25 },
  { name: 'Oranges', price: 41 },
];


//HTML
function HTMLfruitProduct(con) { 
  var URL = `/public/img/fruits/fruit${con}.jpg`;
  var btn = `btnFruit${con}`;
  return `
          <div class="col-md-4">
            <img class="card-img-top" style="height:16rem;" src="${URL}" alt="Card image cap">
            <div class="card-body">
              <i style="color:orange;" class="fa fa-star"></i>
              <i style="color:orange;" class="fa fa-star"></i>
              <i style="color:orange;" class="fa fa-star"></i>
              <i style="color:orange;" class="fa fa-star"></i>
              <i style="color:orange;" class="fa fa-star"></i>
              <p class="card-text">${FRUIT[con - 1].name}</p>
              <p class="card-text">Price: $ ${FRUIT[con - 1].price}.00</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">


                  <button id='${btn}'type="button" onclick="cart('${FRUIT[con - 1].name}','${FRUIT[con - 1].price}', '${URL}','${con}','${btn}')" class="btn btn-sm btn-outline-secondary">
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
  for (let index = 1; index <= 9; index++) { 
    fruitDIV.innerHTML += `${HTMLfruitProduct(index)}`;
  }

  if (localStorage.getItem('cart') == null) {

  } else { 
    products = JSON.parse(localStorage.getItem('cart'));
    cart_n.innerHTML = `[${products.length}]`
  }
})();
