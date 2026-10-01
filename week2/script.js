const salesData = [
    {
        customer: "Anushka",
        product: "Laptop",
        amount: 55000
    },
    {
        customer: "Rahul",
        product: "Mobile",
        amount: 25000
    },
    {
        customer: "Priya",
        product: "Headphones",
        amount: 5000
    },
    {
        customer: "Aman",
        product: "Tablet",
        amount: 18000
    }
];

const totalSales = salesData.reduce((sum, item) => {
    return sum + item.amount;
}, 0);

const totalOrders = salesData.length;

const totalCustomers = new Set(
    salesData.map(item => item.customer)
).size;

document.getElementById("totalSales").textContent =
    "₹" + totalSales.toLocaleString();

document.getElementById("totalOrders").textContent =
    totalOrders;

document.getElementById("totalCustomers").textContent =
    totalCustomers;

const table = document.getElementById("salesTable");

salesData.forEach(item => {

    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${item.customer}</td>
        <td>${item.product}</td>
        <td>₹${item.amount.toLocaleString()}</td>
    `;

    table.appendChild(row);
});