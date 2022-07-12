let currency1 = document.getElementById('from');
let currency2 = document.getElementById('to');

let country = document.getElementById('from1');
let country2 = document.getElementById('to1');

let amount = document.getElementById('amount');
let convert = document.createElement('convert');
let result = document.createElement('result');

convert.addEventListener('click', function(){
let fromCurrency = from.value;
let toCurrency = to.value;
let amount = amount.value;

fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`)
         .then(response => {
               return response.json();
         })
         .then(data => {
            let rate = data.rates[toCurrency];
            let total = rate * amt;
            result.innerHTML = `${amt} ${fromCurrency} = ${total}
            ${toCurrency}`;
         });
});

// const product = {
//     name: 'orange',
//     category: 'fruits',
//     price: 30
//   }
//   var prod = new Product(price, product,quantity);  
//   console.log(product * 2 );
  
