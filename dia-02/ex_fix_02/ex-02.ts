

type Product = {
  barcode: string;
  price: number;
};

// Usando Type Assertions
// function getProduct(): Product {
//   const product = {} as Product;
//   product.barcode = '123c456b789a'; // Error: Property 'barcode' does not exist on type '{}'.
//   return product;
// }


// Usando Type Annotation
function getProduct(): Product {
  const product: Product = {
    barcode: '123c456b789a',
    price: 5,
  };


  return product;
}

console.log(getProduct());