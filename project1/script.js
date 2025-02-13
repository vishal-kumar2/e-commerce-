let cart = [];
        const cartElement = document.getElementById("cart");
        const cartTotalElement = document.getElementById("cart-total");
        const cartItemsElement = document.getElementById("cart-items");
        const checkoutButton = document.getElementById("checkout");

        document.addEventListener("click", (event) => {
            if (event.target.classList.contains("add-to-cart")) {
                const product = event.target.closest(".product");
                const name = product.getAttribute("data-name");
                const price = parseFloat(product.getAttribute("data-price"));
                cart.push({ name, price });
                updateCart();
            }

            if (event.target.classList.contains("remove-item")) {
                const index = event.target.getAttribute("data-index");
                cart.splice(index, 1);
                updateCart();
            }
        });

        function updateCart() {
            cartElement.textContent = `Cart (${cart.length})`;
            cartItemsElement.innerHTML = "";
            let total = 0;
            cart.forEach((item, index) => {
                total += item.price;
                const div = document.createElement("div");
                div.classList.add("cart-item");
                div.innerHTML = `${item.name} - $${item.price} <button class='remove-item' data-index='${index}'>X</button>`;
                cartItemsElement.appendChild(div);
            });
            cartTotalElement.textContent = `Total: $${total.toFixed(2)}`;
        }

        checkoutButton.addEventListener("click", () => {
            if (cart.length === 0) {
                alert("Your cart is empty!");
                return;
            }
            window.location.href = "checkout.html";
        });