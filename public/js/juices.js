//GLOBAL
var products = [];
var cartItems = [];
var cart_n = document.getElementById('cart_n');

//DIVs
var fruitDIV = document.getElementById('fruitDIV')
var juiceDIV = document.getElementById('juiceDIV')
var saladDIV = document.getElementById('saladDIV')

//INFORMATION

var JUICE = [
  { name: 'Orange Juice', price: 12 },
  { name: 'Green Juice', price: 19 },
  { name: 'Tomato Juice', price: 17 },
  { name: 'Juice #4', price: 13 },
  { name: 'Orange Juice #5', price: 12 },
  { name: 'Green Juice #6', price: 19 },
  { name: 'Tomato Juice #7', price: 17 },
  { name: 'Juice #8', price: 13 },
  { name: 'Juice #9', price: 13 }
];


//HTML


function HTMLjuiceProduct(con) { 
  var URL = `/public/img/juice/juice${con}.jpg`;
  var btn = `btnJuice${con}`;
  return `
      <div class="col-md-4 shadow-sm">
        <img class="card-img-top" style="height:16rem;" src="${URL}" alt="Card image cap">
          <div class="card-body">
            <i style="color:orange;" class="fa fa-star"></i>
            <i style="color:orange;" class="fa fa-star"></i>
            <i style="color:orange;" class="fa fa-star"></i>
            <i style="color:orange;" class="fa fa-star"></i>
            <i style="color:orange;" class="fa fa-star"></i>
            <p class="card-text">${JUICE[con - 1].name}</p>
            <p class="card-text">Price $: ${JUICE[con - 1].price}.00</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">

 

                <button id='${btn}'type="button" onclick="cart('${JUICE[con - 1].name}','${JUICE[con - 1].price}', '${URL}','${con}','${btn}')" class="btn btn-sm btn-outline-secondary">
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
    juiceDIV.innerHTML += `${HTMLjuiceProduct(index)}`
  }
  if (localStorage.getItem('cart') == null) {

  } else { 
    products = JSON.parse(localStorage.getItem('cart'));
    cart_n.innerHTML = `[${products.length}]`
  }
})();
