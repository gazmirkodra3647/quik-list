/* 
Filename: advanced_project.js
Description: This code is a simulation of a simple inventory management system for a fictional online store. 
It includes functions for adding, updating, and deleting products, as well as searching and sorting functionality.
Author: [Your Name]
Date: [Date]
*/

// Product class to represent items in the inventory
class Product {
  constructor(id, name, price, quantity) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }
}

// Inventory class to manage products
class Inventory {
  constructor() {
    this.products = [];
  }

  // Add a new product to the inventory
  addProduct(id, name, price, quantity) {
    const newProduct = new Product(id, name, price, quantity);
    this.products.push(newProduct);
    console.log(`${newProduct.name} has been added to the inventory.`);
  }

  // Update the details of a product
  updateProduct(id, name, price, quantity) {
    const productIndex = this.getProductIndex(id);
    if (productIndex !== -1) {
      const updatedProduct = new Product(id, name, price, quantity);
      this.products[productIndex] = updatedProduct;
      console.log(`${updatedProduct.name} has been updated.`);
    } else {
      console.log(`Product with ID ${id} not found.`);
    }
  }

  // Delete a product from the inventory
  deleteProduct(id) {
    const productIndex = this.getProductIndex(id);
    if (productIndex !== -1) {
      const deletedProduct = this.products[productIndex];
      this.products.splice(productIndex, 1);
      console.log(`${deletedProduct.name} has been deleted from the inventory.`);
    } else {
      console.log(`Product with ID ${id} not found.`);
    }
  }

  // Get the index of a product in the inventory
  getProductIndex(id) {
    return this.products.findIndex((product) => product.id === id);
  }

  // Search for a product by name
  searchProductByName(name) {
    const searchResults = this.products.filter(
      (product) => product.name.toLowerCase().includes(name.toLowerCase())
    );
    console.log(`Search results for '${name}':`);
    console.log(searchResults);
  }

  // Sort the products by price in ascending order
  sortProductsByPrice() {
    this.products.sort((a, b) => a.price - b.price);
    console.log("Products sorted by price (ascending):");
    console.log(this.products);
  }
}

// Usage

const inventory = new Inventory();

// Add new products
inventory.addProduct(1, "iPhone 12", 999, 10);
inventory.addProduct(2, "Samsung Galaxy S21", 899, 8);
inventory.addProduct(3, "Google Pixel 5", 699, 12);

// Update a product
inventory.updateProduct(2, "Samsung Galaxy S21 Ultra", 1199, 6);

// Delete a product
inventory.deleteProduct(1);

// Search for products
inventory.searchProductByName("google");

// Sort products by price
inventory.sortProductsByPrice();