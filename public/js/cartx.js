
//GLOBAL
var products = JSON.parse(localStorage.getItem('cart'));
console.log(products)
console.log(products[2].name)
console.log(products[2].price)
console.log(products[2].url)
// var cartItems = [];
// var cart_n = document.getElementById('cart_n');
var table = document.getElementById('table');
// var total = 0;


var name = products[2].name;
var price = products[2].price;
var url = products[2].url;


//HTML
function tableHTML() { 
  return `
        
          <div class="col-md-4">
            <div class="card-body">
              <h1>${name}</h1>
              <h1>${price}</h1>
              <h1>${url}</h1>
              <h1>${products[6].url}</h1>
            </div>
          </div>
          <tr>
            <th scope="row">${1}</th>
            <th><img style="width:90px;" src="${products[5].url}"></th>
            <td>${products[2].name}</td>
            <td>1</td>
            <td>${products[3].name}</td>
          </tr>
            
  `;
}
console.log(JSON.stringify(tableHTML()))
//CLEAN
// function clean() { 
//   localStorage.clear();
//   for (let index = 0; index < products.length; index++) { 
//     table.innerHTML += tableHTML(index);
//     total = total + parseInt(products[index].price);

//   }
//   total = 0;
//   table.innerHTML = `
//                 <tr>
//                   <th></th>
//                   <th></th>
//                   <th></th>
//                   <th></th>
//                   <th></th>
//                 </tr>
//   `;
//   cart_n.innerHTML = '';
//   document.getElementById('btnBuy').style.display = 'none'
//   document.getElementById('btnClean').style.display = 'none'
// }

(() => { 
  
  table.innerHTML = tableHTML();
  // for (let index = 0; index < products.length; index++) { 
    // console.log(products[3])
  //   table.innerHTML += tableHTML(index);
  //   total = total + parseInt(products[index].price);
  // }
  // table.innerHTML += `
  //                   <tr>
  //                     <th scope="col"></th>                      
  //                     <th scope="col"></th>                      
  //                     <th scope="col"></th>                      
  //                     <th scope="col"></th>                      
  //                     <th scope="col">Total: ${total}.00</th>                      
  //                  </tr>
  //                  <tr>
  //                     <th scope="col"></th>                      
  //                     <th scope="col"></th>                      
  //                     <th scope="col"></th>                      
  //                     <th scope="col"></th>                      
  //                     <th scope="col">
  //                         <buttom id="btnClean" onClick="clean()" class="btn text-white btn-warning">
  //                             Clean Shopping Cart
  //                         </buttom>
  //                     </th> 
  //                     <th scope="col">
  //                       <form id="form1" action="/cart" method="POST" autocomplete="off">
  //                         <input type="hidden" name="total" value="${total}">
  //                         <input type="hidden" name="_id" value="">
  //                         <button id="submitbtn" class="btn btn-success">Buy</button>
  //                       </form>
  //                     </th>                      

  //                  </tr>
  // `;
  // products = JSON.parse(localStorage.getItem('cart'));
  // cart_n.innerHTML = `[${products.length}]`;
})()

// var form = document.getElementById('form1');
// document.getElementById('submitbtn').addEventListener('click', () => {
//   localStorage.clear();
//   setTimeout(() => {
//     sub();

//   }, 5000)
// });

// function sub() { 
//   setTimeout(() => { 
//     form.onsubmit();
//   },5000)
// }