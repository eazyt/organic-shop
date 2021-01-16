
// function render() {
  
// }

//GLOBAL
var products = JSON.parse(localStorage.getItem('cart'));
// console.log(products)
var cartItems = [];
var cart_n = document.getElementById('cart_n');
var table = document.getElementById('table');
var total = 0;

//HTML
function tableHTML(i) { 
  return `
          <tr>
            <td scope="row">${i+1}</th>
            <td><img style="width:90px;" src="${products[i].url}"></th>
            <td>${products[i].name}</td>
            <td class="text-center">1</td>
            <td class="text-center">${products[i].price}</td>
            <td class="text-center actions" data-th="">
              <button class="btn btn-danger btn-sm"><i class="fa fa-trash"></i></button>
            </td>
          </tr>
  `;
}
// console.log(JSON.stringify(tableHTML(5)))
//CLEAN
function clean() { 
  localStorage.clear();
  for (let index = 0; index < products.length; index++) { 
    table.innerHTML += tableHTML(index);
    total = total + parseInt(products[index].price);

  }
  total = 0;
  table.innerHTML = `
                <tr>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                </tr>
  `;
  cart_n.innerHTML = '';
  document.getElementById('btnBuy').style.display = 'none'
  document.getElementById('btnClean').style.display = 'none'
}

(() => { 
  
  for (let index = 0; index < products.length; index++) { 
    // console.log(products[3])
    table.innerHTML += tableHTML(index);
    total = total + parseInt(products[index].price);
    
    // console.log(total + 'total')
  }
  table.innerHTML += `
                  <tr>
                    <th style="width:10%"></th>                      
                    <th style="width:5%"></th>                      
                    <th style="width:25%"></th>                      
                    <th style="width:10%"></th>                      
                    <th style="width:10%">Total: $ ${total}.00</th>                      
                  </tr>

                  <tr>
                    <th style="width:10%"></th>                      
                    <th style="width:5%">

                        <button id="btnClean" onClick="clean()" class="btn btn-danger btn-sm"><i class="fa fa-trash fa-2x"></i>
                            Remove All
                        </button>

                    </th> 
                    <th style="width:5%"></th>                      
                    <th style="width:25%"></th>                      
                    <th style="width:10%">
                      <form id="form1" action="/cart" method="POST" autocomplete="off">

                        <input type="hidden" name="total" value="${total}">
                        <input type="hidden" name="_id" value="">

                        <button id="submitbtn" class="btn btn-primary btn-sm"> 
                          Checkout 
                        </button>
                      </form>
                    </th>                      
                    <th style="width:10%"></th>                       
                   </tr>
  `;
  products = JSON.parse(localStorage.getItem('cart'));
  cart_n.innerHTML = `[${products.length}]`;
})()

var form = document.getElementById('form1');
document.getElementById('submitbtn').addEventListener('click', () => {
  localStorage.clear();
  setTimeout(() => {
    sub();

  }, 5000)
});

function sub() { 
  setTimeout(() => { 
    form.onsubmit();
  },5000)
}