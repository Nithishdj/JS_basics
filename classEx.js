class Product {
      constructor(name, price) {
        this.name = name;
        this.price = price;
      }

      calculateTotal(salesTax) {
        return this.price + (this.price * salesTax);
      }
    }

    const salesTax = 0.05;

    // 10 clothing products
    const products = [
      new Product("Shirt", 19.99),
      new Product("Pants", 22.50),
      new Product("Underwear", 100.00),
      new Product("Jacket", 150.00),
      new Product("T-Shirt", 15.00),
      new Product("Jeans", 40.00),
      new Product("Shorts", 25.00),
      new Product("Sweater", 60.00),
      new Product("Cap", 10.00),
      new Product("Socks", 5.00)
    ];

    function searchProduct() {
      const input = document.getElementById("productInput").value.toLowerCase();
      const resultDiv = document.getElementById("result");
      const found = products.find(p => p.name.toLowerCase() === input);

      if (found) {
        const total = found.calculateTotal(salesTax).toFixed(2);
        resultDiv.innerHTML = `
          <table class="result-table">
            <tr><th>Product</th><td>${found.name}</td></tr>
            <tr><th>Price</th><td>$${found.price.toFixed(2)}</td></tr>
            <tr><th>Total with Tax</th><td>$${total}</td></tr>
          </table>
        `;
      } else {
        resultDiv.innerHTML = `<p style="color:red;">Product not found. Please try again.</p>`;
      }
    }