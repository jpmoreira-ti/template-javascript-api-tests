const request = require('supertest');

const baseUrl = 'https://fakestoreapi.com';

describe('Fake Store API Endpoints', () => {
  it('GET All Products', async () => {
    const response = await request(baseUrl).get('/products');
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);

    response.body.forEach(product => {
      expect(product).toHaveProperty('id');
      expect(product).toHaveProperty('title');
      expect(product).toHaveProperty('price');
      expect(product).toHaveProperty('description');
      expect(product).toHaveProperty('category');
      expect(product).toHaveProperty('image');
      expect(product).toHaveProperty('rating');
      expect(product.rating).toHaveProperty('rate');
      expect(product.rating).toHaveProperty('count');
    });
  });

  it('GET Product By Id', async () => {
    const response = await request(baseUrl).get('/products/1');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('id', 1);
    expect(response.body).toHaveProperty('title', 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops');
    expect(response.body).toHaveProperty('price', 109.95);
    expect(response.body).toHaveProperty('description', 'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday');
    expect(response.body).toHaveProperty('category', "men's clothing");
    expect(response.body).toHaveProperty('image', 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg');
    expect(response.body).toHaveProperty('rating');
    expect(response.body.rating).toHaveProperty('rate', 3.9);
    expect(response.body.rating).toHaveProperty('count', 120);
  });

  it('POST Add Product', async () => {
    const newProduct = {
      title: "test product",
      price: 13.5,
      description: "lorem ipsum set",
      image: "https://i.pravatar.cc",
      category: "electronic"
    };

    const response = await request(baseUrl)
      .post('/products')
      .send(newProduct);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('id');
    expect(response.body).toHaveProperty('title', newProduct.title);
    expect(response.body).toHaveProperty('price', newProduct.price);
    expect(response.body).toHaveProperty('description', newProduct.description);
    expect(response.body).toHaveProperty('category', newProduct.category);
    expect(response.body).toHaveProperty('image', newProduct.image);
  });

  it('DELETE Product By Id', async () => {
    const response = await request(baseUrl).delete('/products/21');
    expect(response.status).toBe(200);
    expect(response.text).toBe('null');
  });
});