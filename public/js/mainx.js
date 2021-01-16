

//DIVs
var fruitDIV = document.getElementById('fruitDIV')


//INFORMATION

var FRUIT = [{
  name: 'Apple',
  price: 1
},
{
  name: 'lemon',
  price: 1
},
{
  name: 'grapes',
  price: 1
}]

//HTML
function HTMLfruitProduct(con) { 
  return `
          <div class="col-md-4">
            <div class="card-body">

              <h1>${FRUIT[con-1].name}</h1>
            </div>
          </div>
  `
}



(() => { 
  // fruitDIV.innerHTML = HTMLfruitProduct(index);
  for (let index = 1; index <= 3; index++) { 
    fruitDIV.innerHTML += HTMLfruitProduct(index);
  }
//   // for (let index = 1; index <= 3; index++ ) { 
//   //   juiceDIV.innerHTML += `${HTMLjuiceProduct(index)}`
//   //   saladDIV.innerHTML += `${HTMLsaladProduct(index)}`
  // }

  
})();
