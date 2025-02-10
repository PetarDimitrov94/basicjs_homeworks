// Exercise 1
// There is a JSON with products. Make a call and get the following data from it:
// All beauty products, ordered by price descending
// All the products that have stock more than 50
// All products that have a lifetime warranty and rating of 5
// The average rating of all products in category "furniture"
// The name of the highest rated beauty product
// Find the product with the highest price
// Calculate the average rating from the reviews of products with id 22"
// Return the title and description of all products that have discounted percentage above 10 Link: https://dummyjson.com/products

const fetchProduct = async () => {
  const response = await fetch("https://dummyjson.com/products");
  return response.json();
};

// All beauty products, ordered by price descending
const beautyProducts = async () => {
  const data = await fetchProduct();
  return data.products
    .filter((product) => product.category === "beauty")
    .sort((a, b) => b.price - a.price);
};
(async () => {
  console.log("Beauty Products with price descending:", await beautyProducts());
})();

// All the products that have stock more than 50
const stockProducts = async () => {
  const data = await fetchProduct();
  return data.products.filter((product) => product.stock > 50);
};
(async () => {
  console.log("Products that have stock more than 50:", await stockProducts());
})();

// All products that have a lifetime warranty and rating of 5
const productsLifetimeWarrantyAndRating = async () => {
  const data = await fetchProduct();
  return data.products.filter(
    (product) =>
      product.warranty === "Lifetime warranty" && product.rating === 5
  );
};
(async () => {
  console.log(
    "Products that have a lifetime warranty and rating of 5:",
    await productsLifetimeWarrantyAndRating()
  );
})();

// The average rating of all products in category "furniture"
const averageRatingInFurniture = async () => {
  const data = await fetchProduct();
  const protuctsCategory = data.products.filter(
    (product) => product.category === "furniture"
  );
  const averageRating = protuctsCategory.reduce(
    (acc, product) => acc + product.rating,
    0
  );
  return averageRating / protuctsCategory.length;
};
(async () => {
  console.log(
    "The average rating of all products in category furniture:",
    await averageRatingInFurniture()
  );
})();

// The name of the highest rated beauty product
const highestRatedProduct = async () => {
  const data = await fetchProduct();
  const beautyProduct = data.products.filter(
    (product) => product.category === "beauty"
  );
  const highestRatedBeautyProduct = beautyProduct.reduce((best, product) =>
    product.rating > best.rating ? product : best
  );
  return highestRatedBeautyProduct;
};
(async () => {
  console.log(
    "The name of the highest rated beauty product:",
    await highestRatedProduct()
  );
})();

// Find the product with the highest price
const productWithHighestPrice = async () => {
  const data = await fetchProduct();
  const highestPrice = data.products.reduce((mostExpensive, product) =>
    product.price > mostExpensive.price ? product : mostExpensive
  );
  return highestPrice;
};
(async () => {
  console.log(
    "Product with the highest price:",
    await productWithHighestPrice()
  );
})();
// Calculate the average rating from the reviews of products with id 22"
const averageRatingId22 = async () => {
  const data = await fetchProduct();
  const productId22 = data.products.find((product) => product.id === 22);
  const averageRating = productId22.reviews.reduce(
    (acc, review) => acc + review.rating,
    0
  );
  return averageRating / productId22.reviews.length;
};
(async () => {
  console.log(
    "The average rating from the reviews of products with id 22:",
    await averageRatingId22()
  );
})();

// Return the title and description of all products that have discounted percentage above 10
const titleAndDescriptionOfProducts = async () => {
  const data = await fetchProduct();
  const discountedProducts = data.products.filter(
    (product) => product.discountPercentage > 10
  );
  const allProduct = discountedProducts.map((product) => ({
    title: product.title,
    description: product.description,
  }));
  return allProduct;
};
(async () => {
  console.log(
    "Title and description of all products that have discounted percentage above 10:",
    await titleAndDescriptionOfProducts()
  );
})();
