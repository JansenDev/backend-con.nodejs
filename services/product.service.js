const faker = require('faker');

class ProductService {
  constructor() {
    this.productList = [];
    this.generate();
  }

  generate() {
    const limit = 5;

    for (let index = 0; index < limit; index++) {
      this.productList.push({
        id: faker.datatype.uuid(),
        product: faker.commerce.productName(),
        name: faker.commerce.price(),
        image: faker.image.imageUrl(),
      });
    }
  }

  create(product) {
    product['id'] = faker.datatype.uuid();
    this.productList.push(product);

    return product;
  }

  find() {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(this.productList), 5000);
    });
  }

  findOne(id) {
    const produnctfound = this.productList.find((item) => item.id === id);

    // if (!produnctfound) throw new Error('product not exists! ❌');

    return produnctfound;
  }

  update(id, newProduct) {
    const productIndex = this.productList.findIndex(
      (product) => product.id === id
    );

    if (productIndex == -1) throw new Error('product not found');

    this.productList[productIndex] = { id, ...newProduct };

    return this.productList[productIndex];
  }

  delete(id) {
    const productIndex = this.productList.findIndex(
      (product) => product.id === id
    );

    if (productIndex == -1) throw new Error('product not found');

    this.productList.splice(productIndex, 1);

    return { id };
  }
}

module.exports = ProductService;
