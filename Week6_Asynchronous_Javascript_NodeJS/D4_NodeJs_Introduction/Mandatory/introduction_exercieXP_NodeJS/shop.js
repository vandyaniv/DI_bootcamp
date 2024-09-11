const importObject = require ('../introduction_exercieXP_NodeJS/product.js');


function f_of(name){

  const product = importObject.find( item => item.name === name);

  if (product){
    return product;
  }else {
    return 'The product not found '
  }
  }


  
console.log(f_of('one'));
