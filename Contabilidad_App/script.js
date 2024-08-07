// Función para cargar datos de un archivo JSON
async function loadData() {
    const response = await fetch('data.json');
    return response.json();
}

// Función para mostrar el inventario
async function displayInventory() {
    const data = await loadData();
    const inventory = data.inventory;
    const inventoryDiv = document.getElementById('inventory');

    inventory.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.textContent = `Producto: ${item.product}, Cantidad: ${item.quantity}, Precio: $${item.price.toFixed(2)}`;
        inventoryDiv.appendChild(itemDiv);
    });
}

// Función para mostrar las ventas
async function displaySales() {
    const data = await loadData();
    const sales = data.sales;
    const salesDiv = document.getElementById('sales');

    sales.forEach(sale => {
        const saleDiv = document.createElement('div');
        saleDiv.textContent = `Producto: ${sale.product}, Cantidad: ${sale.quantity}, Total: $${sale.total_price.toFixed(2)}, Fecha: ${sale.date}`;
        salesDiv.appendChild(saleDiv);
    });
}

// Función para mostrar los pedidos
async function displayOrders() {
    const data = await loadData();
    const orders = data.orders;
    const ordersDiv = document.getElementById('orders');

    orders.forEach(order => {
        const orderDiv = document.createElement('div');
        orderDiv.textContent = `Producto: ${order.product}, Cantidad: ${order.quantity}, Precio: $${order.price.toFixed(2)}, Estado: ${order.status}`;
        ordersDiv.appendChild(orderDiv);
    });
}

// Llamar a las funciones en las respectivas páginas
if (document.getElementById('inventory')) {
    displayInventory();
}

if (document.getElementById('sales')) {
    displaySales();
}

if (document.getElementById('orders')) {
    displayOrders();
}

document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const product = document.getElementById('product').value;
    const quantity = document.getElementById('quantity').value;
    const price = document.getElementById('price').value;

    // Aquí puedes añadir el código para enviar el pedido a tu servidor o almacenarlo en el navegador
    alert(`Pedido realizado:\nProducto: ${product}\nCantidad: ${quantity}\nPrecio: ${price}`);
});
